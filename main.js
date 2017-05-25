$(function () {
    hoverOpen();
    emailFocus();
    tabToggle();
    load();
    less();
    resizeInit();
});

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

// Load and Less function
function load() {
    $('#clearance_commodity .row>div').hide();
    if ($(window).width() >= 992) {
        $('#clearance_commodity .row>div').slice(0, 4).show();
        $('#load').on('click', function (event) {
            event.preventDefault();
            $('#clearance_commodity .row>div:hidden').slice(0, 4).slideDown(1500);
            $('body').animate({
                    scrollTop: $(this).offset().top - $('#clearance_commodity .row>div').height()
                },
                1500);
            $('#clearance_commodity').append($('#clearance_commodity img').height());
            // $('#clearance_commodity').append($(window).width());

        });
    } else if ($(window).width() >= 768 && $(window).width() < 992) {
        $('#clearance_commodity .row>div').slice(0, 3).show();
        $('#load').on('click', function (event) {
            event.preventDefault();
            $('#clearance_commodity .row>div:hidden').slice(0, 3).slideDown(1500);
            $('body').animate({
                    scrollTop: $(this).offset().top - $('#clearance_commodity .row>div').height()
                },
                1500);
            $('#clearance_commodity').append($('#clearance_commodity img').height());
            // $('#clearance_commodity').append($(window).width());
        });
    } else {
        $('#clearance_commodity .row>div').slice(0, 2).show();
        $('#load').on('click', function () {
            event.preventDefault();
            $('#clearance_commodity .row>div:hidden').slice(0, 2).slideDown(1500);
            $('body').animate({
                    scrollTop: $(this).offset().top - $('#clearance_commodity .row>div').height()
                },
                1500);
            // $('#clearance_commodity').append($(window).width());

        });
    }
}


function less() {
    $('#less').on('click', function () {
        if ($(window).width() >= 992) {
            var $show_items = $('#clearance_commodity .row>div').not('#clearance_commodity .row>div:hidden').length;
            if ($show_items > 4) {
                $('#clearance_commodity .row>div').slice($show_items - 4, $show_items).slideUp(1500);
                $('body').animate({
                        scrollTop: $(this).offset().top - $('#clearance_commodity .row>div').height()
                    },
                    1500);
                $('#clearance_commodity').append($('#clearance_commodity img').height());
            }
        } else if ($(window).width() < 992 && $(window).width() >= 768) {
            var $show_items = $('#clearance_commodity .row>div').not('#clearance_commodity .row>div:hidden').length;
            if ($show_items > 3) {
                $('#clearance_commodity .row>div').slice($show_items - 3, $show_items).slideUp(1500);
                $('body').animate({
                        scrollTop: $(this).offset().top - $('#clearance_commodity .row>div').height()
                    },
                    1500);
                $('#clearance_commodity').append($('#clearance_commodity img').height());
            }
        } else {
            var $show_items = $('#clearance_commodity .row>div').not('#clearance_commodity .row>div:hidden').length;
            if ($show_items > 2) {
                $('#clearance_commodity .row>div').slice($show_items - 2, $show_items).slideUp(1500);
                $('body').animate({
                        scrollTop: $(this).offset().top - $('#clearance_commodity .row>div').height()
                    },
                    1500);
                $('#clearance_commodity').append($('#clearance_commodity img').height());
            }
        }
    });
}


function resizeInit() {
    $(window).resize(function () {
        location.reload();
        // Below is for firefox browser
        this.location.href = this.location.href;
    });
}