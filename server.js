var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./server/routes/index');
var readers = require('./server/routes/readers');
var books = require('./server/routes/books');
var blogs = require('./server/routes/blogs');

var app = express();

// // VIEW
// app.set('views', path.join(__dirname, '/server/views'));
// app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'client/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

//API
app.use('/', routes);
app.use('/api/readers', readers);
app.use('/api/books', books);
app.use('/api/blogs', blogs);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var debug = require('debug')('server');

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));

module.exports = app;
