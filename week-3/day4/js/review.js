
// don't pollute the global namespace!!
var x = 13;
console.log( x === window.x );

// IIFE - Immediately Invokeable Function Expression
(function(x) {
    // var y;  // <--- this is where y is HOISTED to
    console.log(x);

    // define (or use an existing) namespace
    // find the first defined object and use it... or create it if not (the last condition)
    window.dom = window.dom || window.otherthing || window.foo || {};

    console.log(y);  // undefined BECAUSE y is HOISTED to the top of its scope

    var y = 10;  // y is HOISTED, but the VALUE is still assigned here

    console.log( sum(x, y) );  // 52

    // the ENTIRE function declaration gets HOISTED
    function sum(a, b) {
        return a + b;
    }

    // console.log( add(2, 2) );  // TypeError because the ASSIGNMENT has not occurred yet
    var add = sum;
    console.log( add(2, 2) );  // 4


    function getAdder() {
        var specialValue = 100;
        return function doAdding(one, two) {
            // specialValue will RETAIN the value when it was created
            specialValue++;
            // but now I change it... and any FUTURE function calls
            // get the NEW value (the changed version)
            // THIS IS CALLED A CLOSURE
            return one + two + specialValue;
        };
    }

    var foobar = getAdder();
    console.log( foobar );  // the new function
    console.log( foobar(10, 30) );  // 141
    console.log( foobar(10, 30) );  // 142
    var foobar2 = getAdder();
    console.log( foobar2(10, 30) );  // 141
    // foobar2 is NOT EQUAL TO foobar... it is a NEW function of its own
    // fobar2 gets its OWN COPY of specialValue, initially set to 100
    console.log( foobar(10, 30) );  // 143

    window.dom.sum = sum;

})(42);
