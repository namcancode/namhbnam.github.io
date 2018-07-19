var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

var indexRouter = require("./routes/index");
// var usersRouter = require('./routes/users');
var categoryRouter = require("./routes/category");
var detailRouter = require("./routes/detail");
var memberRouter = require("./routes/member");
var app = express();
import { sequelize } from "./databases/database";
import { DBNAME, USERNAME, PASSWORD, HOST, DBPORT } from "./configs/config";
//session
app.set("trust proxy", 1); // trust first proxy
// app.use(
// 	session({
// 		store: new (require('connect-pg-simple')(session))(),
// 		secret: 'huongoianhyeuem',
// 		resave: false,
// 		saveUninitialized: true,
// 		cookie: { secure: false },
// 		conString: 'pg://' + USERNAME + ':' + PASSWORD + '@' + HOST + '/' + DBNAME
// 	})
// );

// var SequelizeStore = require('connect-session-sequelize')(session.Store);
// var myStore = new SequelizeStore({
//     db: sequelize
// })
// app.use(
// 	session({
// 		secret: "huongoianhyeuem",
// 		store: myStore,
// 		resave: false,
// 		saveUninitialized: true,
// 		cookie: { secure: false },
// 		proxy: true
// 	})
// );
// myStore.sync();

app.use(
	session({
		secret: "huongoianhyeuem",
		store: new (require("connect-session-sequelize")(session.Store))({
			db: sequelize
		}),
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
		proxy: true
	})
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/category", categoryRouter);
app.use("/detail", detailRouter);
app.use("/member", memberRouter);
// app.use('/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
