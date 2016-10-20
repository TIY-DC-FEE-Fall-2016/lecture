
/* Concept review from Week 2 Day 3 */

console.log('goodbye');

var address = '123 Main St';  // string
console.log(address);
address = 42;  // number
console.log(address);
address = false; // boolean

var waldo;  // declaration (the value waldo points to is... undefined)
console.log(waldo);
waldo = 'where?';  // instantiation (first time assignment)

// console.log(foobar);  // ReferenceError

var name = 'Jordan';

if (name === 'jordan') {
    console.log('You are an instructor');
} else {
    console.log('you are not him!');
}

if (1 === '1') {
    console.log('noooope');
}
if (1 == '1') {
    console.log('yeeeeep');
}

var isAwesome = true;

// if (isAwesome !== true) {
if (!isAwesome) {  // the isAwesome variable must be false to run this block
    console.log('you are not cool');
}
if (false) {
    // will I ever get in here? NO!
}


function multiply(x, y) {
    var product = x * y;
    return product;
    // return x * y;  // one step versus two
}

var result = multiply(3, 4);
//           |-----12------|   This BECOMES the number 12

console.log( result );  // 12
console.log( multiply(3, 3) );
console.log( multiply );
// console.log(product); //  this gonna work?? NO!
