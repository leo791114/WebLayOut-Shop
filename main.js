$(function () {
    hoverOpen();
})

function hoverOpen() {
    $('.dropdown').hover(function () {
        $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
    });
}