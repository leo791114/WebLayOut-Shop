$(function () {
    $('.demo2').dynamicPagination({
        total: 10,
        maxVisible: 5,
        page: 1,
        leap: false,
        leapFirstLast: true
    }).on('page', function (event, num) {
        $('.content').html('page' + num);
    });
});