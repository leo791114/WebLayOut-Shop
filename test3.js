(function ($, window) {

    $.fn.test = function () {
        function change($me) {
            var $page = $me.find('li');
            $me.find('li#one').attr('value', 'yes');
            $me.find('li#two').attr('value', 'yes-two');
            console.log($page);
            console.log($page[0].getAttribute('value'));
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