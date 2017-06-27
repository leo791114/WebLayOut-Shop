// $(function () {

//     var $outerDiv = $('#test');
//     var $innerLi = $outerDiv.find('li');
//     var $current = $innerLi.filter('[value = 1]');
//     $($innerLi).on('click', function () {
//         var test = $(this);
//         console.log(test);
//         console.log(test.html());
//         test.html('Yes');
//     })

//     console.log($outerDiv);
//     console.log($innerLi);
//     console.log($current);
//     console.log($innerLi[1]);
//     console.log($innerLi[0].getAttribute('value'));

//     $current.css('background-color', 'yellow');
// });

(function ($, window) {

    $.fn.test = function () {
        function change($me) {
            $me.find('li#one').attr('value', 'yes');
            $me.find('li#two').attr('value', 'yes-two');
        }

        return this.each(function () {
            var me = $(this);
            console.log(me);
            p = ['<ul id="test">'];
            p = p.concat(['<li id="one" value="1">one</li>']);
            p = p.concat(['<li id="two" value="2">two</li>']);
            p = p.concat(['<li id="three" value="3">three</li>']);
            p = p.concat(['</ul>']);
            me.append(p.join(''));
            console.log(p);
            change(me);
        });
    };

})(jQuery, window)