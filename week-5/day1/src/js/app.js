(function() {
    'use strict';

    window.hello = window.hello || {};

    window.hello.sayHello = sayHello;
    window.hello.sayGoodbye = sayGoodbye;


    /**
     * This function returns a greeting if you give
     * it a name, otherwise it might yell at you.
     * @param  {String} name The name to say hello to
     * @return {String}      The greeting for you
     */
    function sayHello(name) {
        if (name === undefined) {
            return 'Where did you go?';
        } else if (typeof(name) !== 'string') {
            return 'You are a liar.';
        }
        return 'Hello ' + name;
    }

    function sayGoodbye(name) {
        return 'Goodbye ' + name;
    }

})();
