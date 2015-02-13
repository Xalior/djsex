if (djsex) {
    djsex.anim = {
        init: function () {
            /*
             * PRAGMA
             * Simple polyfil to requestAnimationFrame
             * By Paul Irish http://paulirish.com/2011/requestanimationframe-for-smart-animating/
             */
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame =
                    window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function (callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        },
                        timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function (id) {
                    clearTimeout(id);
                };
            /*
             * PRAGMA END
             */
        },

        redraw: function (el) {
            el.style.webkitTransform = el.style.webkitTransform;
        }
    };
} else {
    console.log('DJSEX ERROR: could not find djsex.core!');
}


djsex.anim.init();

