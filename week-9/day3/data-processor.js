
var fs = require('fs');

console.log(process.env.HOME, process.pid);

console.log( process.argv );

var theFileToRead = null;

process.argv.forEach(function lookForFile(eachArg) {
    var argPieces = eachArg.split('=');
    if (argPieces[0] === '--file') {
        theFileToRead = argPieces[1];
    }
});

if (theFileToRead) {
    fs.readFile(theFileToRead, processFile);
} else {
    console.error('No file to read!');
    process.exit(127);
}


function processFile(err, theData) {

    if (err) {
        console.log(err instanceof Error);
        console.error( err, err.stack );
        console.trace();
        return;
    }

    // do stuff with the data
    console.log( theData.toString('utf-8') );

    var nameList = theData
        .toString('utf-8')
        .split('\n')
        .map(function convertName(name) {
            return name.toUpperCase();
        })
        .filter(function(name) {
            return name.trim().length > 0;
        });

    console.log(nameList);
}
