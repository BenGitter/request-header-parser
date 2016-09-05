var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var api = require("./api");

app.enable('trust proxy');

app.use("/", api);

app.listen(port, function(){
  console.log('App listening on port ' + port);
})