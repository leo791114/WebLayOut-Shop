$(function () {
    hoverOpen();
    emailFocus();
})

function hoverOpen() {
    $('.dropdown').hover(function () {
        $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
    });
}

function emailFocus() {
    $('#email').focus(function () {
        if (this.placeholder == 'Your email address') {
            this.placeholder = "";
        }
    });

    $('#email').blur(function () {
        if (this.placeholder == "") {
            this.placeholder = "Your email address";
        }
    });
}