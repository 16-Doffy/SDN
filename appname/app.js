var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const productRouter = require("./routes/productName");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// dữ liệu mẫu
const productsiu = [
  { title: "Card 1", img: "https://via.placeholder.com/150" },
  { title: "Card 2", img: "https://via.placeholder.com/150" },
  { title: "Card 3", img: "https://via.placeholder.com/150" },
  { title: "Card 4", img: "https://via.placeholder.com/150" },
];

// route render view
app.get("/productsiu", (req, res) => {
  res.render("index", { productsiu });
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
