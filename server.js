import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser'; // necessary for getting POST requests
import  dotenv from 'dotenv'
import  exphbs from 'express-handlebars'
import  {formatDate } from './utils/funcHandlebars.js';  // VIEW HElPERS, i.e. moment

import {router} from './routes/index.js';
import {techRouter} from './routes/tech.js';
import {readersRouter} from './routes/readers.js'; 
import {postsRouter} from './routes/posts.js';

// Load config
dotenv.config({ path: './config/config.env' })

export const app = express();

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
 
// app.set('views', path.join(__dirname, '/views'));


// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error/500', {
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

app.use('/', router);                   // ./routes/index' 
// app.use('/api/tech', tech);                   // ./routes/index' 
app.use('/api/readers', readersRouter);       //  ./routes/readers 
app.use('/api/posts', postsRouter);           //  ./routes/posts 


import debug from 'debug'; 
debug('server');

app.set('port', 4000);// process.env.PORT || );

app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));
 
