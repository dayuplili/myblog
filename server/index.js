var express = require('express');
var app = express();

app.get('/init', function (req, res) {
  res.send(req.query);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});