(function() {
    'use strict';

    console.log('hello world!');

    // var request = new XMLHttpRequest();
    // // request.headers['X-jordan'] = 'is cool';
    // request.onreadystatechange = function handleStateChange(xhrEvent) {
    //     // handle whenever the state of the request changes!
    //     if (request.readyState >= 4) {
    //         // now I know the response is back (and done)
    //         if (request.status >= 200 && request.status <= 299) {
    //             // now I know its a SUCCESSFUL response...
    //             // so I can process the data
    //             console.log('got good data', request.responseText);
    //         } else {
    //             console.log('bad status code', request);
    //         }
    //     } else {
    //         console.log('some other state', request.readyState);
    //     }
    // };
    // request.open('GET', 'data.json');
    // request.send(/* any POST data you want to send goes in here */);
    //
    // $.ajax({
    //     url: 'data.json'
    // })
    // .done(function handleResponse(data) {
    //     console.log('ajax done', data);
    //     console.log(data.names[2]);
    //     data.names.forEach(function printName(eachName) {
    //         console.log(eachName);
    //     });
    // });
    //
    // $.ajax({
    //     url: 'simple-text.txt',
    //     method: 'GET',  // POST
    //     dataType: 'json',  // what kind of data do I expect from server?
    //     headers: {
    //         'Content-Type': 'application/json'  // what kind of data am I SENDING TO the server?
    //     }
    // })
    // .done(function handleSuccess(data) {
    //     console.log('in the success handler!');
    //     console.log(data);
    // })
    // .fail(function errorCallback(xhr, errorType) {
    //     // errorType === "parseerror" if we asked for JSON, but got back something else
    //     console.log(arguments);
    // });
    //
    //
    // $.ajax({
    //     url: 'users/jordan'  // this does NOT exist!
    // })  // This function (ajax) RETURNS an object!!
    //     // what kind of object? an XHR object!
    // .done(function handleFooData() {
    //     console.log('we should not get here!');
    // })
    // .fail(function handleMissingURL(xhr, errorType) {
    //     console.log(errorType, xhr);
    //     if (xhr.status === 404) {
    //         $('body').append('<p>Sorry, cannot find that file!</p>');
    //     } else if (xhr.status === 500) {
    //         $('body').append('<p>Sorry, the server is down!</p>');
    //     }
    // });


    $('button').on('click', function getGHInfo() {
        var myToken = $('input').val();

        $.ajax({
            url: 'https://api.github.com/users/jakerella',
            dataType: 'json',
            headers: {
                Authorization: 'token ' + myToken
            }
        })
        .done(function handleGHData(data) {
            console.log('GitHub Data!');
            console.log(data);
        })
        .fail(function handleGHError(xhr) {
            console.log('GitHub be broked', xhr);
        });
    });


})();
