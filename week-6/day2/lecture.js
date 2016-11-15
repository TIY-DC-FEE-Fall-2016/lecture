(function() {
    'use strict';

    var me = {
        color: 'blue',
        race: 'smurf'
    };
    // var me = new Object();

    var fruits = new Array();  // or we could use []
    var today = new Date();

    console.log( typeof(today) );  // "object"  :(
    console.log( today instanceof Date );   // true
    console.log( today instanceof Object ); // true
    console.log( today instanceof Array );  // false

    // getHours is a function... or METHOD ... or INSTANCE METHOD
    console.log( today.getHours() );  // NUMBER... 0-23
    // now is a function... but we call this one a STATIC METHOD
    console.log( Date.now() );  // NUMBER of ms since Jan 1, 1970 GMT

    // END OF GENERAL CONCEPTS...
    // BEGINNING OF OUR EXPLORATION INTO OUR OWN TYPES


    function Character(name) {
        console.log( 'inside character', this );
        this.name = name || 'Miscellaneous';
    }
    Character.prototype.sayHello = function sayHello() {
        console.log( 'Hi, my name is ' + this.name );
    };


    // This is a CONSTRUCTOR function
    // Inside ANY constructor function, the CONTEXT (this) will be the
    // new object being created (in our case, the new Smurf)
    function Smurf(name, role, hat) {
        // instead of defining a property on EACH smurf...
        // let's put it on the prototype! (see below)
        // this.breed = 'smurf';

        // this says: execute the Character function (which is a constructor)
        // but change the value of "this" INSIDE the Character function
        // to match the value of "this" isnide the Smurf function
        Character.apply( this, [name] );

        this.role = role || 'Lazy bum';
        if (typeof(hat) === 'boolean') {
            this.hat = hat;
        } else {
            // this is still a DEFAULT value, just a different way to do it
            this.hat = false;
        }

        // console.log(this, arguments);
    }
    // change the Smurf prototype to point to its real parent: the Character prototype
    Smurf.prototype = Object.create(Character.prototype);
    // but now we have to switch back the constructor, otherwise
    // it will point to the Character function, not the Smurf function
    Smurf.prototype.constructor = Smurf;


    // this is a STATIC method definition
    // on the Smurf OBJECT (which also happens to be a function)
    Smurf.translate = function translate(text) {
        // do some translation
        // THIS is not what you expect here... it is NOT a specific Smurf
        // console.log( this );  // this prints out the ENTIRE function called "Smurf"
        return 'Smurf the smurf in this smurf, yall.';
    };

    // we are creating an INSTANCE method
    Smurf.prototype.hatsOff = function hatsOff() {
        // inside of INSTANCE methods, "this" will be the current Smurf
        // that we are working with
        console.log( this );
        this.hat = false;
    };
    Smurf.prototype.breed = 'smurf';


    var handy = new Smurf('handy', 'worker', false);
    var papa = new Smurf('papa', 'leader', true);
    var ummm = new Smurf();

    console.log('handy:', handy);
    console.log('papa:', papa);
    console.log('ummm:', ummm);

    console.log( Smurf.translate('Yo yo yo, what the haps?') );

    console.log( papa.hat );
    papa.hatsOff();
    console.log( papa.hat );

    papa.sayHello();
    // papa.sayHi();  // TypeError


})();
