
// single line comment

/*
     multi-line comment
 */

// three DIFFERENT varaibles
var class_name = '';
var classname = '';
//  keyword   variable name   assignment operator      value (string)  semi-colon
      var       className              =                'front end'         ;

// print the value of className to the developer console in the browser
console.log('this is my message');
console.log(className);

var day = 19;       // "data type" of "number"
var pi = 3.1415926; // "data type" of "number"
var month = '10';   // "data type" of "string"
var iRock = true;   // "data type" of "boolean" (either true or false)

// var var = 12;  // "var" is a keyword, so I can't use it as a variable name

// variable declaration    Value assignment (or "instantiation")
         var pet                      = 'Vincent';
         pet = 'Pod';   // variable assignment

var spouse;   // What data type is this?  --> "undefined"

console.log(spouse);   // prints: undefined

spouse = 'Samara';  // value assignment / variable instantiation (first time)

console.log(spouse);  // prints: Samara

var wife = spouse;

console.log(spouse, wife, 'another message');  // prints: Samara Samara another message

spouse = false;  // creates a new value (false) and points "spouse" to it

console.log(spouse);  // prints: false


/*       CONDITIONALS       */

var year = 2000;

if (year > 1999) {
      // if the stuff in parenthesis above is TRUE, then execute this code
      console.log('A NEW MILLENIUM!');

} else {  // the ELSE block is OPTIONAL (only use it if you need it)

      // if the stuff in parenthesis above is NOT TRUE (FALSE), then execute THIS code

      // console.log("you're living in the past"); // this is ok... but inconsistent
      console.log('you\'re living in the past');  // using an "escaped" value we can print the apostrophe
}

/*
  greater than, less than, greater than OR equal to, less than OR equal to
  >, <, >=, <=
  (generally used with numbers, but if used with strings it compares them lexigraphic / alphabetical)

  = (NOOOO... this is assignment)
  ==  (simple equality)    1 == "1"   TRUE!
  === (strict equality)    1 === "1"  FALSE!
  USE STRICT EQUALITY!!!!
 */


/*       FUNCTIONS        */

// keyword   name  argument list   fn block (two curly braces)
   function   sum      (x, y)          {
      // all the code of my function goes in here...

      // x + y;  // this way, the result (4 maybe) ONLY EXISTS ON THIS LINE. (No way to get to it later)

      var result = x + y;  // the variable "result" ONLY EXISTS IN THIS FUNCTION!!!
      console.log('inside of sum fn', result);

   // keyword & value
      return   result;  // go find the VALUE that "result" points to and send it back!
   // return x + y;  // we COULD HAVE written it this and avoided the intermediary variable

   }  // end of my function

// use the name of the function to run it!
var theNumber = sum(4, 7);  // 4 will become "x" in the fn, and 7 will become "y" in the fn
console.log(theNumber);

console.log(  sum(theNumber, 10)  );  // 21
console.log(  sum( sum(1, 1), sum(2, 2) )  );
//                     2           4
//             6 is the FINAL result printed out

var companyName = 'The' + ' Iron' + ' Yard';  // "The Iron Yard"

console.log(result);  // this will NOT WORK! (because "result" is only available inside the "sum" function)
