/*
 * This is not a Array Library,
 *  (this is just a tribute)
 *
 * This is just a set of helpers, to make code easier to maintain.
 *
 * D. Rimron <darran@xalior.com>
 */

if (djsex) {
    if (djsex.math) {
        djsex.array = {
            randomIndex: function(arr) {
                return djsex.math.randomInt(0, arr.length-1);
            }
        };
    } else {
        djsex.log('djsex.array requires djsex.math');
    }
} else {
    console.log('DJSEX ERROR: could not find djsex.core!');
}
