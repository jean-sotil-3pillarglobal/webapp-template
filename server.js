var config = require("./config")(); //import config file.
var express = require("express");
var app = express();

app.use(express.static(__dirname+"/public")) //where to look for static files.
app.use(express.static(__dirname+"/node_modules/bootstrap-less")) // reading fonts path from bootstrap.

app.listen(config.port);
console.log("Running on port "+ config.port);