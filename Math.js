/*
 * This is not a Math Library,
 *  (this is just a tribute)
 *
 * This is just a set of helpers, to make code easier to maintain.
 *
 * D. Rimron <darran@xalior.com>
 */

if (djsex) {
    djsex.math = {
        randomInt: function(floor, ceil) {
            var min = floor === ceil ? ceil : floor; // min is value that is not max
            var d = ceil - floor + 1; // distribution range
            return Math.floor(Math.random() * d + floor);
        },

        decimalToHex: function(d, padding) {
            var hex = Number(d).toString(16);
            padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

            while (hex.length < padding) {
                hex = "0" + hex;
            }

            return hex;
        },

        invert: function(value) {
            return (value * (-1));
        }
    };
    /*
     * Backwards Compatability!
     */
    djsex.math.randomint = djsex.math.randomInt;
} else {
    console.log('DJSEX ERROR: could not find djsex.core!');
}

