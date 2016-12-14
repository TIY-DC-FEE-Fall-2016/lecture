
// revealing module pattern

module.exports = function setup(dateString) {
    var startingPoint = new Date(dateString);

    return function getDaysSince() {
        var now = Date.now();
        return (now - startingPoint.getTime()) / (1000 * 60 * 60 * 24);
    };
};
