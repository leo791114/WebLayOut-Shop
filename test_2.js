$(function () {
    $('.demo2').dynamicPagination({
        total: 10,
        maxVisible: 15,
        page: 5,
        leap: false,
        leapFirstLast: true
    }).on('page', function (event, num) {
        $('.content').html('page' + num);
    });
});