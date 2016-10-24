
// var game = new Object();
var game = {  // we usually prefer this way
    score: 0,
    turn: 1,
    users: [],
    addUser: function addUser(name) {
        // this === game
        this.users.push({
            name: name,
            lives: 3,
            money: 500
        });
    },
    searchForRichestUser: function doStuffWithMoney() {
        var currentLargest = 0;
        var richestUser = null;
        var i;

        for(i=0; i < game.users.length; i++) {
            console.log( game.users[i].name );

            if (game.users[i].money > currentLargest) {
                currentLargest = game.users[i].money;
                richestUser = game.users[i];
            }
        }
        return richestUser;
    }
};
// or we can assign these things AFTER the fact (less preferred)
// game.score = 0;
// game['score'] = 0;

// var userOne = { ... };
// game.users.push( userOne );
// game.users.push( 42 );

// DRY - don't repeat yourself!!
// game.users.push({
//     name: 'Jordan',
//     lives: 3,
//     money: 500
// });
// game.users.push({
//     name: 'Jane',
//     lives: 3,
//     money: 500
// });

// this function needs to exist INSIDE the game
// function addUser(name) {
//     game.users.push({
//         name: name,
//         lives: 3,
//         money: 500
//     });
// }

game.addUser('Jordan');
game.addUser('Jane');
game.addUser('Jim');
game.addUser('Joan');

console.log(game);
console.log( game.users[0] );  // userOne

console.log( Object.keys( game ) );  // an array of the property names

game.users[2].money = 10000;
var richestUser = game.searchForRichestUser();
console.log(richestUser);


// Built-in Objects

// Dates

var now = new Date();

console.log( now );
console.log( now.getFullYear(), now.getMonth(), now.getDay(), now.getDate() );
// CYMD format - need to use concatenation since these are all numbers
console.log(  '' + now.getFullYear() + (now.getMonth() + 1) + now.getDate()  );

var janOne = new Date('01/01/2016');
var timeDiff = now.getTime() - janOne.getTime();

console.log( now.getTime(), (timeDiff / 1000 / 60 / 60 / 24) );

var tomorrow = new Date( now.getTime() + (1000 * 60 * 60 * 24) );
console.log(tomorrow);


// Strings

var myName = 'Jordan';
// myName = new String(myName)
console.log( myName.length );
console.log( myName.toUpperCase() );  // toLowerCase()
console.log( myName );
console.log( myName.split('r') );    // array
console.log( myName.indexOf('dan') );  // number
console.log( myName.substr(3) ); // string
console.log( myName.substr(3, 2) ); // string

// Math

console.log( Math.PI );
console.log( Math.round(Math.PI) );
console.log( Math.max(2, 7) );  // min()

console.log( Math.random() );  // a random number between 0 (incl) and 1 (excl)

console.log( Math.round(Math.random() * 13) ); // num between 0 and 13 inclusive
console.log( Math.ceil(Math.random() * 13) );  // num between 1 and 13 inclusive
// Math.floor()  always round down
