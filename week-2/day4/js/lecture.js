
/* JavaScript Objects and Arrays */

var me = new Object();

// dot syntax
me.name = 'Jordan';
console.log( me.name );

me.role = 'Instructor';
me.experience = 20;
me.likesPuzzles = true;
console.log( me );

// bracket syntax?
me['hometown'] = 'Washington';
// me.fav-sport = 'soccer';
me['fav-sport'] = 'soccer';
var propertyName = 'school';
me[propertyName] = 'TIY';  // same as me['school'] = 'TIY' ...OR: me.school = 'TIY'
console.log(me);

// Creating a new object, but using "object literal" syntax

var pet = {
    species: 'canine',
    age: 12,
    isCute: true,
    owner: { name: 'Jordan', address: '1234 Main St' }
};

pet.name = 'Vincent';
pet.age = 13;

console.log( pet.owner.name );  // "Jordan"

var cat = {
    name: 'Pod',
    age: 15
};

pet.sibling = cat;
console.log(pet);

cat.birthday = function birthday() {
    // cat.age = cat.age + 1;
    // SAME AS: cat.age++;
    // SAME AS: cat.age += 1;

    this.age++;  // this === cat
};
console.log(cat.age); // 15
cat.birthday();
cat.birthday();
cat.birthday();
console.log(cat.age); // 18

var pettwo = cat;
cat = null;

pettwo.birthday();
console.log(pettwo.age); // 19


/*    Arrays    */

// var fruits = new Array();
var fruits           =   [ 'banana', 'mango', 7, 'kiwi', 'strawberry', 'guava' ];
// Indeces (singular: Index)  0        1     2     3          4          5

console.log( fruits[1] );
console.log( fruits.length );
console.log( fruits[ fruits.length - 1 ] );

var table = '';
var i;
//   starting   continue condition    step  (could be: i+=2 )
for (  i=0    ;  i < fruits.length ;  i++ ) {
    // this code will execute ONCE per fruit in our array
    table += fruits[i] + ' ' + i + ' ';
}
console.log( table );
