const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')

//Init
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout : 'main',
    extname : '.hbs'
}))
app.set('view engine', '.hbs');
//Middlewares
app.use(express.urlencoded({ extended : false }));
app.use(morgan('dev'));

//Routes
app.use(require('./routes/index.routes'));
//Static
app.use(express.static(path.join(__dirname,'public')));




module.exports = app;