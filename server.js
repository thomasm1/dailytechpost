var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser'); // necessary for getting POST requests
const dotenv = require('dotenv')
const exphbs = require('express-handlebars') 
const {formatDate } = require('./utils/funcHandlebars');  // VIEW HElPERS, i.e. moment

var routes = require('./routes/index');
var tech = require('./routes/tech');
var readers = require('./routes/readers');
var books = require('./routes/books');
var blogs = require('./routes/blogs');

// Load config
dotenv.config({ path: './config/config.env' })

var app = express();

// BODY PARSING VIEWS
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use(express.json());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// VIEW
app.engine('.hbs', 
    exphbs({
    helpers: {formatDate}, 
    defaultLayout:'main',
    extname:'.hbs'
})
)
app.set('view engine', '.hbs');
app.use(favicon(path.join(__dirname, 'client/favicon.ico')));
// app.set('views', path.join(__dirname, '/views'));


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


app.use(logger('dev'));

// @docu API
// @api

app.use('/', routes);                   // ./routes/index' 
// app.use('/api/tech', tech);                   // ./routes/index' 
app.use('/api/readers', readers);       //  ./routes/readers
app.use('/api/books', books);           //  ./routes/books
app.use('/api/blogs', blogs);           //  ./routes/blogs 


var debug = require('debug')('server');

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));

module.exports = app;
