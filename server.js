var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;
var routes = require('./routes');

//config handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(routes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/classapril3_db";

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});