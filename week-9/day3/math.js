
var addNumbers = require('./sum');

module.exports = {
    subtract,
    multiply,
    sum: addNumbers
};

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}
