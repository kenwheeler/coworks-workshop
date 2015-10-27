var path = require('path');
var express = require('express');
var request = require('request-promise');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/api/search/:query', function(req, res) {
  request("http://api.walmartlabs.com/v1/search?query="+req.params.query+"&format=json&apiKey=t82fz3csqyab44e2yhch32k8")
  .then(function (data) {
    res.json(JSON.parse(data))
  });
});

app.listen(1337, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('API server started at http://localhost:1337');
});
