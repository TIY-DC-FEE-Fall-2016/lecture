(function() {
    'use strict';

    console.log(1);
    var x = 1 + 1;
    console.log(2);

    var a = ['navi', 'syed', 'rodolfo'];
    a.forEach(function printPerson(name) {
        // this is SYNCHRONOUS callback
        console.log(name);
    });
    console.log(3);

    $.ajax({
        url: 'js/lecture.js',
        dataType: 'text'
    })
    .done(function handleSuccess(data) {
        // asynchronous callback!
        console.log(4);
        // this will happen AFTER any synchronous code below
        // AND once the ajax call completes
    });
    console.log(5);

    //  setTimeout( fn, someTime  );
    setTimeout(function sayHi() {
        // this is an ASYNCHRONOUS callback
        console.log('hi!', new Date());
        // this will happen AFTER any synchronous code below
        // AND the time set on the next line has expired
    }, 2000); // how long to wait in milliseconds

    console.log(6);

    setTimeout(function sayGoodbye() {
        console.log('goodbye');
    }, 1);

    console.log(7);

    for (var i = 0; i < 100000000; i++) {
        new Object();
    }

    console.log(8, new Date());

})();
