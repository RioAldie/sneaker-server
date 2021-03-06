var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');

var categoryRouter = require('./app/category/router');
const dashboardRouter = require('./app/dashboard/router');
const brandRouter = require('./app/brand/router');
const nominalRouter = require('./app/nominal/router');
const bankRouter = require('./app/bank/router');
const productRouter =  require('./app/product/router');
const paymentRouter = require('./app/payment/router');
const customerRouter = require('./app/customer/router');
const transactionRouter = require('./app/transaction/router');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/adminlte', express.static(path.join(__dirname, '/node_modules/admin-lte')));

app.use('/', dashboardRouter);
app.use('/category', categoryRouter);
app.use('/brand', brandRouter);
app.use('/nominal', nominalRouter);
app.use('/bank', bankRouter);
app.use('/product', productRouter);
app.use('/payment', paymentRouter);
app.use('/customer', customerRouter);
app.use('/transaction', transactionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
