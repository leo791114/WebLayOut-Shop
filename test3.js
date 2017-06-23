$(function () {

    var $outerDiv = $('#test');
    var $innerLi = $outerDiv.find('li');
    var $current = $innerLi.filter('[value = 1]');

    console.log($outerDiv);
    console.log($innerLi);
    console.log($current);

    $current.css('background-color', 'yellow');
});