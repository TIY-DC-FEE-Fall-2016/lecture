
var http = require('http');

var server = http.createServer(function handleRequest(req, res) {

    console.log('New request from ' + req.url);

    if (req.url === '/user') {
        // go do user stuff...
    } else if (req.url === '/books') {
        // go do book stuff...
    }

    res.end('<html><body><h1>Hello world!</h1></body></html>');

});

server.listen(3000, function serverIsUp(err) {

    if (err) {
        console.error('Could not start server');
    } else {
        console.log('Server started at http://localhost:3000');
    }

});
