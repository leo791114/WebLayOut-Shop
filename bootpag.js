/**
 * @preserve
 * bootpag - jQuery plugin for dynamic pagination
 *
 * Copyright (c) 2015 botmonster@7items.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://botmonster.com/jquery-bootpag/
 *
 * Version:  1.0.7
 *
 */
(function ($, window) {

    $.fn.bootpag = function (options) {

        var $owner = this,
            settings = $.extend({
                    total: 0,
                    page: 1,
                    maxVisible: null,
                    leaps: true,
                    href: 'javascript:void(0);',
                    hrefVariable: '{{number}}',
                    next: '&raquo;',
                    prev: '&laquo;',
                    firstLastUse: false,
                    first: '<span aria-hidden="true">&larr;</span>',
                    last: '<span aria-hidden="true">&rarr;</span>',
                    wrapClass: 'pagination',
                    activeClass: 'active',
                    disabledClass: 'disabled',
                    nextClass: 'next',
                    prevClass: 'prev',
                    lastClass: 'last',
                    firstClass: 'first'
                },
                $owner.data('settings') || {},
                options || {});
        if (settings.total <= 0) {
            return $owner; // same as return this
        }

        // check whether maxVisible is a number or not
        // no need to add && !settings.maxVisible
        if (!$.isNumeric(settings.maxVisible)) {
            settings.maxVisible = parseInt(settings.total, 10);
            // console.log($.isNumeric(settings.maxVisible));
            // console.log(settings.maxVisible);
        }

        $owner.data('settings', settings);
        // console.log($owner.data('settings'));

        function renderPage($bootpag, page) {
            // page to show
            console.log($bootpag);
            page = parseInt(page, 10);
            var lp,
                maxV = settings.maxVisible == 0 ? 1 : settings.maxVisible,
                // step = settings.maxVisible == 1 ? 0 : 1,
                step = 1,
                vis = Math.floor((page - 1) / maxV) * maxV, //page - 1 is used to handle the situation which page is equal or less than 1
                $page = $bootpag.find('li');

            settings.page = page = page < 0 ? 0 : page > settings.total ? settings.total : page;
            $page.removeClass(settings.activeClass);
            lp = page - 1 < 1 ? 1 :
                settings.leaps && page - 1 >= settings.maxVisible ?
                Math.floor((page - 1) / maxV) * maxV : page - 1;

            // when the pagination is at the first showing page, disable the leap to first button
            $page
                .first()
                .toggleClass(settings.disabledClass, page === 1);

            var lfirst = $page.first();
            if (settings.firstLastUse) {
                lfirst = lfirst.next();
            }

            // href(lp) will return javascript:void(0)
            lfirst
                .toggleClass(settings.disabledClass, page === 1)
                .attr('data-lp', lp)
                .find('a').attr('href', href(lp));

            // var step = settings.maxVisible == 1 ? 0 : 1;
            lp = page + 1 > settings.total ? settings.total :
                settings.leaps && page + 1 < settings.total - settings.maxVisible ?
                vis + settings.maxVisible + step : page + 1;

            var llast = $page.last();
            if (settings.firstLastUse) {
                llast = llast.prev();
            }
            console.log(lp);
            llast
                .toggleClass(settings.disabledClass, page === settings.total)
                .attr('data-lp', lp)
                .find('a').attr('href', href(lp));

            $page
                .last()
                .toggleClass(settings.disabledClass, page === settings.total);


            var $currPage = $page.filter('[data-lp=' + page + ']');
            console.log(lfirst[0]);
            console.log(page);
            console.log($page);
            console.log($page[7]);
            console.log($page[7].getAttribute('data-lp'));
            console.log($page[4]);
            console.log($page[4].getAttribute('data-lp'));
            console.log($page.attr('data-lp'));
            console.log($currPage);
            console.log($page.filter('[data-lp' + page + ']'));
            var clist = "." + [settings.nextClass,
                settings.prevClass,
                settings.firstClass,
                settings.lastClass
            ].join(",.");
            // console.log(clist);

            if (!$currPage.not(clist).length) {
                var d = page <= vis ? -settings.maxVisible : 0; // True condition would appear when page is less than zero
                // console.log('d:', d);
                $page.not(clist).each(function (index) {
                    lp = index + 1 + vis + d;
                    $(this)
                        .attr('data-lp', lp)
                        .toggle(lp <= settings.total)
                        .find('a').html(lp).attr('href', href(lp));
                    console.log($(this).attr('data-lp'));
                });
                $currPage = $page.filter('[data-lp=' + page + ']');
            }
            $currPage.not(clist).addClass(settings.activeClass);
            $owner.data('settings', settings);
        }

        function href(c) {
            // console.log(c, ':', settings.hrefVariable);
            // console.log(c, ':', settings.href);
            return settings.href.replace(settings.hrefVariable, c);
        }

        return this.each(function () {

            var $bootpag, lp, me = $(this),
                p = ['<ul class="', settings.wrapClass, ' bootpag">'];
            console.log(me);
            if (settings.firstLastUse) {
                p = p.concat(['<li data-lp="1" class="', settings.firstClass,
                    '"><a href="', href(1), '">', settings.first, '</a></li>'
                ]);
            }
            if (settings.prev) {
                p = p.concat(['<li data-lp="1" class="', settings.prevClass,
                    '"><a href="', href(1), '">', settings.prev, '</a></li>'
                ]);
            }
            for (var c = 1; c <= Math.min(settings.total, settings.maxVisible); c++) {
                p = p.concat(['<li data-lp="', c, '"><a href="', href(c), '">', c, '</a></li>']);
            }
            if (settings.next) {
                lp = settings.leaps && settings.total > settings.maxVisible ?
                    Math.min(settings.maxVisible + 1, settings.total) : 2;
                p = p.concat(['<li data-lp="', lp, '" class="',
                    settings.nextClass, '"><a href="', href(lp),
                    '">', settings.next, '</a></li>'
                ]);
            }
            if (settings.firstLastUse) {
                p = p.concat(['<li data-lp="', settings.total, '" class="last"><a href="',
                    href(settings.total), '">', settings.last, '</a></li>'
                ]);
            }
            p.push('</ul>');
            me.find('ul.bootpag').remove();
            me.append(p.join(''));
            $bootpag = me.find('ul.bootpag');

            me.find('li').click(function paginationClick() {

                var me = $(this);
                console.log(me);
                if (me.hasClass(settings.disabledClass) || me.hasClass(settings.activeClass)) {
                    return; // same as return undefined, and it can be ignore
                }
                var page = parseInt(me.attr('data-lp'), 10);
                $owner.find('ul.bootpag').each(function () {
                    renderPage($(this), page); //$(this) indicate to ul.pagination.bootpag
                });

                // create 'page' event and passing page to be the parameter of on's handler function
                $owner.trigger('page', page);
            });
            renderPage($bootpag, settings.page);
        });
    }

})(jQuery, window);