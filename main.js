$(function () {
    hoverOpen();
    emailFocus();
    tabToggle();
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

function tabToggle() {
    $('#next').click(function () {
        $('.nav-tabs > li.active').next('li').find('a').trigger('click');
    });

    $('#previous').on('click', function () {
        $('.nav-tabs > li.active').prev('li').find('a').trigger('click');
    });
}