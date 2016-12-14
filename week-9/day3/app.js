
console.log('Starting up...');


require('./data-processor');


// var addNumbers = require('./sum');
var math = require('./math');
var thatThing = require('./other-stuff');

console.log(thatThing);

console.log( math.sum(1, 1) );
console.log( math.multiply(3, 10) );
console.log( math.subtract(123454, 546786543) );

var daysSinceSetup = require('./dates');
var daysInCohort = daysSinceSetup('10/11/2016');
var daysInYear = daysSinceSetup('1/1/2016');

console.log( daysInCohort() );
console.log( daysInYear() );

var _ = require('lodash');

var defaultOptions = { foo: 'bar', lucky: 13 };

function doSomeWork(options) {
    var allOptions = _.merge({}, defaultOptions, options);

    console.log(allOptions);
}

doSomeWork({ lucky: 7, bat: 'baz' });
