var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send({name:'lin'});
});

app.listen(3000);