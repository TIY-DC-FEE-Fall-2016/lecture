
(function(){
    window.fee = window.fee || {};
    // if (typeof(window.fee) !== 'object') {
    //     window.fee = {};
    // }

    // console.log( window.fee.sum(10, 20) );

    // Must multiple any number of arguments it is provided
    function product() {
        var result = 1;
        var i;

        // arguments will ALWAYS be present and ALWAYS contain ALL
        // arguments passed into the function as an ARRAY-LIKE thing
        console.log(arguments);

        for(i=0; i<arguments.length; i++) {
            result = result * arguments[i];
        }

        return result;
    }
    function division(x, y) {
        return x / y;
    }

    console.log( product(5, 10, 2, 3) );

    // console.log(window.fee.sum);

    window.fee.product = product;
    window.fee.division = division;

    // console.log(window.fee.sum);

})();
