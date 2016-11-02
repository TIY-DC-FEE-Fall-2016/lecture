(function() {
    'use strict';

    var origin = 'https://api.github.com';
    var input = 'jordan';

    $.ajax({
        url: origin + '/search/users',  // '?q=' + input,
        method: 'GET',  // what if this was 'POST'
        data: {  // if this is a POST, jQuery will put the data in the request body
            q: input,  // we got "q" from the GitHub API documentation
            foo: 'bar'
        }
    })
    .done(function successHandler(data) {
        console.log(data);
    })
    .fail(function failHandler(xhr) {
        console.log(xhr);
    });

    $.ajax({
        url: '/login',
        data: JSON.stringify({ username: 'jordan' }),
        header: {
            'Content-Type': 'application/json'
        }
    });



})();
