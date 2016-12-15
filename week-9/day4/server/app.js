
var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.set('port', process.env.PORT || 3000);

server.use(bodyParser.json());

server.use(function logger(req, res, next) {
    console.log('REQUEST sent to ', req.path);

    // res.status(418).end('I\'m a little teapot');

    next();  // I'm done, go on to the next piece of middleware

    // if there was a problem, you could INSTEAD, do this:
    // next(new Error('OH NOES!!'));
});

server.get('/', function handleRootRoute(req, res) {
    console.log('Query params?', req.query);
    console.log('name?', req.query.name);
    res.send('<html><body><h1>Hello ' + req.query.name + '!</h1></body></html>');
});

server.use('/destinations', require('./routes/destinations'));

server.listen(server.get('port'), function serverStarted(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Server started at http://localhost:' + server.get('port'));
    }
});
