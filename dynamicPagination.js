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
            first: '&larr',
            last: '&rarr',
            ulClass: 'pagination',
            activeClass: 'active',
            disabledClass: 'disabled',
            nextClass: 'next',
            prevClass: 'prev',
            lastClass: 'last',
            firstClass: 'first'
        };

        var $ulTag = this,
            settings = $.extend($.fn.dynamicPagination.default, options || {});

        // The total pages should be great than zero
        if (settings.total <= 0) {
            return $ulTag;
        }

        // Check whether maxVisible is a number or not
        if (!$.isNumeric(settings.maxVisible)) {
            settings.maxVisible = parseInt(settings.total, 10);
        }

        // Assign setting values to ul tag's settings attribute
        $ulTag.data('settings', settings);

    }












})(jQuery, window);