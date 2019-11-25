require(['jquery'], function ($) {

    'use strict';

    function windowSize() {
        if ($(window).width() > '767') {
            $(".nav-sections").sticky({topSpacing: 0});
        } else {
            $(".nav-sections").unstick();
        }
    }

    $(window).on('load resize', windowSize);

});
