
// IIFE - Immediately Invoked (Invokable) Function Expression
// an anonymous function
(function() {
    // console.log(y);  // ReferenceError

    var z = 100;
    var i = 1;

    // functions define a SCOPE for the variables declared within them
    function sum(y, z) {
        // var y = 5; var z = 2;  // the FUNCTION does this for us
        // var foo;  // variable hoisting
        var x, bar, user, game;  // explicit variable hoisting

        x = 42;
        // var foo = 42;
        // what REALLY happens is var foo; above! and then foo = 42 here

        return x + y + z + i;  // z === 2 because it looks at local scope first
    }

    console.log( sum(5, 2) );
    // console.log( y );  // ReferenceError
    // console.log(x); // ReferenceError
    console.log(z);


    // if the "namespace" (fee) is NOT an object already,
    // then we will create it. Do this in EVERY IIFE / JS file
    // Do this BEFORE you try to put stuff on the namesapce
    if (typeof(window.fee) !== 'object') {
        window.fee = {};
    }

    // place the sum function on our namespace
    window.fee.sum = sum;

})();

// console.log(i); // ReferenceError

// global varaible... defined where? window!
var jksahdfk = 'jordan';
