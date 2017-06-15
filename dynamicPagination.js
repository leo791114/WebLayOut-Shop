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
            settings = $.extend($.fn.dynamicPagination.default, options || {});

        // The total pages should be great than zero
        if (settings.total <= 0) {
            return $tag;
        }

        // Check whether maxVisible is a number or not
        if (!$.isNumeric(settings.maxVisible)) {
            settings.maxVisible = parseInt(settings.total, 10);
        }

        // Assign setting values to ul tag's settings attribute
        $tag.data('settings', settings);

        function pageTabs() {

            // var $this = $(this);
            console.log($tag);
            console.log(settings.prevClass);
            var pageTab = ['<ul class="', settings.ulClass, '" >'];

            if (settings.leapFirstLast) {
                pageTab = pageTab.concat(['<li value="1" class="', settings.firstClass, '">', '<a href="', href(1), '">', settings.first, '</a></li>']);
            }

            if (settings.prev) {
                pageTab = pageTab.concat(['<li value="1" class="', settings.prevClass, '">', '<a href="', href(1), '">', settings.prev, '</a></li>']);
            }

            for (var i = 1; i <= Math.min(settings.total || settings.maxVisible); i++) {

                pageTab = pageTab.concat(['<li value="', i, '"><a href="', href(i), '">', i, '</a></li>']);
            }

            if (settings.next) {
                pageTab = pageTab.concat(['<li value="2" class="', settings.nextClass, '"><a href="', href(2), '">', settings.next, '</a></li>']);
            }

            if (settings.leapFirstLast) {
                pageTab = pageTab.concat(['<li value="', settings.total, '" class="', settings.lastClass, '"><a href="', href(settings.total), '">', settings.last, '</a></li>']);
            }

            pageTab.push('</ul>');
            console.log(pageTab);
            $tag.append(pageTab.join(''));

            // make current page active
            $('ul.' + settings.ulClass + ' li[value="' + settings.page +
                    '"]:not( .' + settings.firstClass + ', .' + settings.prevClass + ', .' + settings.nextClass + ', .' + settings.lastClass + ')')
                .addClass('active');

            // find ul with pagination class
            var $ulTag = $tag.find('ul');
            console.log($ulTag);

            $ulTag.find('li').click(function paginationClick() {
                var $this = $(this);
                if ($this.hasClass(settings.disabledClass) || $this.hasClass(settings.activeClass)) {
                    return;
                }
            })
        }

        function href(value) {
            return '#' + value;
        }

        return this.each(function () {
            pageTabs();
        });

    };












})(jQuery, window);