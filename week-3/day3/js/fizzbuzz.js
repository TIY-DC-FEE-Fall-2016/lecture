console.log('starting fizzbuzz');

function fizzBuzz (counter) {
    var result = "0 ";

    for( var i = 1; i <= counter; i++) {
        if ((i % 3) === 0 && (i % 5) === 0) {
            result += 'fizzbuzz ';
        } else if ((i % 3) === 0) {
            // console.log('fizz');
            result += 'fizz ';

        } else if ((i % 5) === 0) {
            result += 'buzz ';

        } else {
            result += i + ' ';
        }
    }


    return result;
}
console.log(fizzBuzz(34));
