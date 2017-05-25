$(function () {
    $('#window').append($(window).height());
    $('#document').append($(document).height());
    scrollBottom(12);
    console.log(scrollBottom(12));
});


function scrollBottom(scroll) {
    console.log(typeof scroll);
    console.log($(document).height());
    console.log($(window).height());
    console.log(scroll);
    if (typeof scroll === 'number') {
        $(window).scrollTo(0, $(document).height() - $(window).height - scroll);
        return $(document).height() - $(window).height - scroll;
    } else {
        return $(document).height() - $(window).height() - $(window).scrollTop();
    }
}