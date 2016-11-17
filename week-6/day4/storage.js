(function() {
    'use strict';

    var apiToken;

    function login(username, password) {
        // audit the arguments
        // do some ajax call to log the person in...
        setTimeout(function fakeAjax() {
            // the server might give us back a "token"
            // to use in our subsequent API calls
            var data = {
                token: '34858253958365385789873467',
                name: 'JDawg',
                id: 13
            };

            apiToken = data.token;
            // the "window." part is optional
            window.localStorage.setItem('apiToken', apiToken);
            console.log('set token in localstorage');

            // we need to make our OBJECT into a string
            // for localStorage
            window.localStorage.setItem('userData', JSON.stringify(data));

        }, 500);

    }

    if (localStorage.getItem('apiToken')) {
        console.log('you have already logged in');
        apiToken = localStorage.getItem('apiToken');
        // we need to convert our string into an object first
        var userData;
        try {
            userData = JSON.parse( localStorage.getItem('userData') );
        } catch(err) {
            // we might not care about this error...
            // but you still need a catch block, even if its empty
        }
        console.log( userData.name );
    } else {
        console.log('we are logging you in now');
        login('jordan', '12345');
    }

    function logout() {
        localStorage.removeItem('apiToken');
        console.log('logged you out');
    }
    // logout();


    // JSON.parse() MUST GET A PROPER JSON STRING to parse...
    // otherwise it THROWS an error
    try {
        JSON.parse('{ id: 8736458 }');  // this needs double quotes around "id"
    } catch (err) {
        console.log('looks like bad data in there...');
    }

})();
