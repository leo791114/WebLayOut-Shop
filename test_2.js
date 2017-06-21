$(function () {
    $('.demo2').dynamicPagination({
        total: 10,
        maxVisible: 7,
        page: 8,
        leap: false,
        leapFirstLast: true
    }).on('page', function (event, num) {
        $('.content').html('page' + num);
    });
});