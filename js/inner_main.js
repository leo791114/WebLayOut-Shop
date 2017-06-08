$(function () {
    selectDisplay();
    tabNavigateEffect();
    nextPrevNavigation();
});

function selectDisplay() {

    var defaultShowText = $('#product select option:first-child').text();
    $('#showElement').text(defaultShowText);
    $('#sorting').on('change', function () {
        var selectShowText = $('#sorting').find(':checked').text();
        $('#showElement').text(selectShowText);
    });
}

function tabNavigateEffect() {
    // Page navigate
    $('#product #pagination ul li:not(#next)').on('click', function () {
        $('#product #pagination ul li.active').removeClass('active');
        $(this).addClass('active');
    });
}

function nextPrevNavigation() {
    $('#product #pagination ul li#next').on('click', function () {
        $('#pagination ul > li.active').removeClass('active').next('li').addClass('active').find('a').trigger('click');
    });

}
