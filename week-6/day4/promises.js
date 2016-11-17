(function() {
    'use strict';


    /**
     * Fake ajax method
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    function ajax(callback) {
        setTimeout(function() {
            callback({ name: 'jordan', now: Date.now() });
        }, 500);
    }

    // This is our pyramid of doom... otherwise known as
    // callback hell
    // ajax(function callOne(data) {
    //     console.log(data);
    //
    //     ajax(function callTwo(dataTwo) {
    //         console.log(dataTwo);
    //
    //         ajax(function callThree(dataThree) {
    //             console.log(dataThree);
    //         });
    //     });
    // });


    /**
     * Promis-style fake ajax method
     * @return {Promise}
     */
    function pjax() {
        var p = new Promise(function doWork(resolve, reject) {
            setTimeout(function() {

                var data = { name: 'jordan', now: Date.now() };

                // put a little randomness in our logic...
                if (data.now % 2 === 0) {
                    // if the timestamp is even, resolve...
                    resolve(data);
                } else {
                    // otherwise reject
                    reject(new Error('random rejection!!!'));
                }

            }, 500);
        });
        return p;
    }

    // generate promiseOne
    pjax()                  // $.ajax()
        .then(function promiseOneHandler(data) {  // .done()
            console.info('inside first then handler', data);
            // window.ns.showData(data);
            var id;
            // id = data.results[4].id
            return pjax(id); // generate promiseTwo
        })
        .then(function promiseTwoHandler(data) {
            console.info('inside second then handler', data);
            // window.ns.showMoreData(data);
            return pjax();
        })
        .then(function promiseThreeHandler(data) {
            console.log('inside third then handler', data);
            return data.name;
        })
        .then(function specificDataHandler(data) {
            console.log(data);
        })
        .catch(function(err) {  // .fail()
            console.warn(err);
        });


})();
