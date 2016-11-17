(function() {
    'use strict';

    // ES6 / ES2015 is the current standard
    // but not yet implemented by all browsers we need to support

    console.log( x );  // undefined
    // console.log( y );  // ReferenceError
    var x = 13;

    // console.log( z );  // ReferenceError
    let z = 42; // this does not get hoisted

    if (true) {
        // "let" scopes variables within the nearest curly braces,
        // not just the nearest function
        let a = 7;
    }
    // console.log( a ); // ReferenceError

    // ES6 has function default values
    function sum(numbers = []) {
        var total = 0;
        numbers.forEach(function(num) {
            total += num;
        });
        return total;
    }
    console.log( sum() );

    // rest operator with variable number of arguments (variadic behavior)
    function layEggs(...names) {
        console.log( arguments.forEach );
        console.log( names.forEach );
        console.log( names.length );
    }
    layEggs('joe');
    layEggs('crystal', 'bill');
    layEggs('jill', 'joe', 'nancy');

    // object destructuring
    var user = { first: 'jordan', last: 'kasper', id: 13, role: 'instructor' };
    var { first: f, id: i } = user;
    console.log( f, i );

    function getData(first, last, id, role) {
        $.ajax({
            url: '...',
            // ...
            data: JSON.stringify({
                first,  // as if we typed: first: first,
                last,   // last: last,
                id,     // id: id,
                role    // role: role
            })
        });
    }


})();
