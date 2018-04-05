
"use strict";

var express = require("express");
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/public/'));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

var port = process.env.PORT || 5005;
var server = app.listen(port, function() {
  console.log("Server is running on port " + port);
});
