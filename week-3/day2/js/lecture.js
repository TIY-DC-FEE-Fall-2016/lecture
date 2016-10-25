
var people = [ 'jordan', 'matt', 'john', 'marcy', 'rachel' ];

function logger(person) {
    // person === people[i]    (from the code above)
    console.log(person);
}

var i;
for (i=0; i<people.length; i++) {
    // people['length'] === people.length;
    // people[ i ] = people[ people.length-1 ].toUpperCase();
    people[ i ] = people[ i ].toUpperCase();

    // this is EXACTLY what we do down below using people.forEach(logger)
    logger( people[i] );
    // forEach() executes OUR function here..
}
console.log(people);


function toLower(person, i) {
    people[ i ] = person.toLowerCase();
}

people.forEach(logger);
console.log('converting to lower case');
people.forEach(toLower);
people.forEach(logger);

var numbers = [ 3, 123, 56, 365434, 'hi!', 7, 234 ];

var x = 42;
numbers.push(13);
numbers.push(x);

// numbers.forEach( function double(num, i) {
//     numbers[i] = num * 2;
// } );
var doubleNums = numbers.map( function double(num) {
    // whatever you return becomes the new entry for that index
    if (typeof(num) !== 'number') {
        return 'oh noes!';

    } else if (num < 100) {
        return num * 2;

    } else {
        return num * -1;
    }
} );

var negatives = doubleNums.filter(function onlyNegatives(num) {
    // if (num < 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return (num < 0);
});

console.log(doubleNums);
console.log(negatives);

var allPeople = people.join('---');
console.log( allPeople );
