var express   = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');

require('babel-core/register')({
    presets: ["react", "es2015"]
})

app.set('view engine', 'ejs');
app.use(express.static('public'));

var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var request = require('request');

mongoose.connect('mongodb://juliettegb:12345SIX@ds161336.mlab.com:61336/frelancess',{useMongoClient:true}, function (err) {console.log('db connected')});
var options = {server:{socketOptions:{connectTimeoutMS:30000}}};
const fileUpload = require('express-fileupload');
app.use(fileUpload());

var MissionSchema = mongoose.Schema({
  title: String,
  email: String,
  sector: String,
  desc: String,
});

var MissionModel = mongoose.model('freelance', MissionSchema);


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

app.post('/add', function (req, res) {
  console.log(req.body);

    var mission = new MissionModel({
    title: req.body.title,
    email: req.body.email,
    sector: req.body.sector,
    desc: req.body.desc,
  });
  console.log(mission);

  mission.save(function (err, mission) {
     console.log(mission);
     res.send('form envoyé');
    // saved!
  });


});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
