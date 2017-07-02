(function ($, window) {
    $.fn.dynamicPagination = function (options) {

        $.fn.dynamicPagination.default = {
            total: 0,
            page: 1,
            maxVisible: null,
            leap: false,
            leapFirstLast: false,
            next: '&raquo',
            prev: '&laquo',
            first: '&larr;',
            last: '&rarr;',
            ulClass: 'pagination',
            activeClass: 'active',
            disabledClass: 'disabled',
            nextClass: 'next',
            prevClass: 'prev',
            lastClass: 'last',
            firstClass: 'first'
        };

        var $tag = this,
            // The || is used to avoid extending jQuery namespace while there is no options input
            settings = $.extend($.fn.dynamicPagination.default, options || {});
        console.log(jQuery.fn);

        // The total pages should be great than zero
        if (settings.total <= 0) {
            console.log('Total pages should be greater than zero.');
            return $tag;
        }

        if (settings.page <= 0) {
            console.log('Page should be greater than zero.');
            return $tag;
        }

        // Check whether maxVisible is a number or not
        if (!$.isNumeric(settings.maxVisible)) {
            settings.maxVisible = parseInt(settings.total, 10);
        }

        // Assign setting values to ul tag's settings attribute
        $tag.data('settings', settings);

        function initPageTabs() {

            var page = settings.page,
                maxV = settings.maxVisible,
                total = settings.total,
                leapStep;
            // pageSection = total >= maxV ? Math.floor((page / maxV) + 1) * maxV : total,
            // leapStep = settings.leap ? pageSection - (page + 1) : 1;
            // pageStart = total >= maxV ? pageSection - (maxV - 1) : 1;
            // console.log(pageSection);
            // var $this = $(this);
            console.log($tag);
            // console.log(settings.prevClass);
            var pageTab = ['<ul class="', settings.ulClass, '" >'];

            if (settings.leapFirstLast) {
                pageTab = pageTab.concat(['<li value="1" class="', settings.firstClass, '">', '<a href="', href(1), '">', settings.first, '</a></li>']);
            }

            if (settings.prev) {
                pageTab = pageTab.concat(['<li value="1" class="', settings.prevClass, '">', '<a href="', href(1), '">', settings.prev, '</a></li>']);
            }

            for (var i = 1; i <= Math.min(total, maxV); i++) {
                pageTab = pageTab.concat(['<li value="', i, '"><a href="', href(i), '">', i, '</a></li>']);
            }

            if (settings.next) {
                pageTab = pageTab.concat(['<li value="2" class="', settings.nextClass, '"><a href="', href(2), '">', settings.next, '</a></li>']);
            }

            if (settings.leapFirstLast) {
                pageTab = pageTab.concat(['<li value="', total, '" class="', settings.lastClass, '"><a href="', href(total), '">', settings.last, '</a></li>']);
            }

            pageTab.push('</ul>');
            console.log(pageTab);
            $tag.append(pageTab.join(''));

            // make current page active
            $('ul.' + settings.ulClass + ' li[value="' + page +
                    '"]:not( .' + settings.firstClass + ', .' + settings.prevClass + ', .' + settings.nextClass + ', .' + settings.lastClass + ')')
                .addClass('active');

            // find ul with pagination class
            var $ulTag = $tag.find('ul');
            // pagination tabs click effect
            $ulTag.find('li').click(function paginationClick() {
                var $this = $(this);
                console.log($this);
                if ($this.hasClass(settings.disabledClass) || $this.hasClass(settings.activeClass)) {
                    return; //same as return undefined, and it can be ignored
                }

                var page = parseInt($this.attr('value'), 10);
                console.log(page);
                $ulTag.each(function () {
                    renderPage($(this), page);
                });
            });
            renderPage($(this), page);
        }

        function renderPage($ulTag, currentPage) {

            var page = parseInt(currentPage, 10),
                liValue;
            var $page = $ulTag.find('li'),
                functionList = '.' + [settings.firstClass,
                    settings.prevClass,
                    settings.nextClass,
                    settings.lastClass
                ].join(',.');
            var $currentPages =
                console.log(functionList);

            // $page.removeClass('active');

            $page.first().toggleClass(settings.disabledClass, page === 1);
            var prePage = $page.first();
            if (settings.leapFirstLast) {
                prePage = prePage.next();
            }

            liValue = page + 1 > settings.total ? settings.total :
                settings.leap

            prePage.toggleClass(settings.disabledClass, page === 1)
                .attr('value', )

            $page.last().toggleClass(settings.disabledClass, page === settings.total);


        }

        function href(value) {
            return '#' + value;
        }

        return this.each(function () {
            initPageTabs();
            renderPage(settings.page);
        });

    };












})(jQuery, window);