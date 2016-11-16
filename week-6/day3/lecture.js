(function() {
    'use strict';

    window.lecture = window.lecture || {};
    window.lecture.sum = sum;

    /**
     * Sums the numbers provided returning the total
     * @param  {Array} numbers All the numbers to sum up
     * @throws {TypeError}     If the argument is not an array
     * @throws {SyntaxError}   If one of the array entries is not a number
     * @return {Number}        The total sum
     */
    function sum(numbers) {
        var total = 0;

        if (!Array.isArray( numbers )) {
            var err = new TypeError('HEY! You gotta give me an array!');
            err.userMessage = 'Sorry, our developers are cray cray.';
            throw err;
        }

        numbers.forEach(function addsNumbers(num) {
            if (typeof(num) !== 'number') {
                throw new SyntaxError('One of these things is not like the other');
                // throw 'uh oh, i done bad';  // please don't do this
            }
            total += num;
        });

        return total;
    }

    console.log('at the bottom of lecture.js!');

})();
