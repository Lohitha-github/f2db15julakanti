var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Eatable = require("./models/eatable");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gridbuildRouter = require('./routes/gridbuild');
var eatablesRouter = require('./routes/eatables');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();
require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/eatables', eatablesRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});
async function recreateDB() {
  // Delete everything
  await Eatable.deleteMany();
  let instance1 = new
    Eatable({
      eatable_name: "ice-cream", flavor: 'strawberry',
      price: 5.4
    });
    let instance2 = new
    Eatable({
      eatable_name: "chocolate", flavor: 'coco',
      price: 6.4
    }); let instance3 = new
    Eatable({
      eatable_name: "pizza", flavor: 'cheese',
      price: 5.4
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Secoud object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
