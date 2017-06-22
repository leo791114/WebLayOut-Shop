$(function () {
    $('.demo1').bootpag({
        total: 10,
        maxVisible: 5,
        page: 6,
        leaps: true,
        firstLastUse: true
    }).on('page', function (event, num) {
        $('.content').html('page' + num);

    });

    test();

});

function test() {
    var settings = {
        one: 1,
        two: 2,
        three: 3,
        four: 4
    };

    var options = {};

    var test = $.extend(settings, options || {});
    console.log(test);
}