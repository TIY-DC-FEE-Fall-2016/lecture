(function() {
    'use strict';

    window.lecture = window.lecture || {};

    function doSumming() {
        try {
            window.lecture.sum( 'this is not an array' );
            console.log('will I show up?');
        } catch (err) {
            console.log('I caught it!!');
            // alert(err.userMessage);
        }

        console.log('We kept going!');

        try {
            var result = window.lecture.sum([1, 2, 3]);
            console.log('The sum is', result);
        } catch (err) {
            console.log('Will I execute this catch?');
        } finally {
            console.log('do this no matter what');
        }

        try {
            window.lecture.sum([1, 2, 3, 4, 5, 6, true]);
        } catch (err) {
            if (err instanceof TypeError) {
                console.warn(err.message);
            } else if (err instanceof SyntaxError) {
                console.info(err.message);
            } else {
                console.log('some other err...', err.message);
            }
        } finally {
            console.log('even if we get an error, I will run');
        }

    }

    doSumming();

})();
