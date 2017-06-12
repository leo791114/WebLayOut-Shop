$(function () {
    $('.demo1').bootpag({
        total: 20,
        maxVisible: 5,
        page: 1,
        leaps: false,
        firstLastUse: true

    }).on('page', function (event, num) {
        $('.content').html('page' + num);
        console.log($('.demo1').hrefVariable);
        console.log($('.demo1').href);
    });
});