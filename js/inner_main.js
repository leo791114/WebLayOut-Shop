$(function () {
    selectDisplay();
});

function selectDisplay() {

    var defaultShowText = $('#product select option:first-child').text();
    $('#showElement').text(defaultShowText);
    $('#sorting').on('change', function () {
        var selectShowText = $('#sorting').find(':checked').text();
        $('#showElement').text(selectShowText);
    });
}

