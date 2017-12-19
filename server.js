var express   = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');

require('babel-core/register')({
    presets: ["react", "es2015"]
})

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/home', function(req, res) {
  res.render('index');
});

app.get('/mission', function(req, res) {
  res.render('index');
});

app.get('/missions', function(req, res) {
  res.render('index');
});

app.get('/freelances', function(req, res) {
  res.render('index');
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
