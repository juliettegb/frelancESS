require('babel-core/register')({
  presets: ["react", "es2015"]
})
var express   = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
var React = require('react');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var request = require('request');
mongoose.connect('mongodb://the1st:mlab00@ds161306.mlab.com:61306/feess',{useMongoClient:true}, function (err) {console.log('db connecte')});
var options = {server:{socketOptions:{connectTimeoutMS:30000}}};
const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.get('/', function(req, res) {
  res.render('index')
});

var feessSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  experience: String,
  Notes: String,
  competence:Boolean,
  competence1:Boolean,
  competence2: Boolean,
  competence3:Boolean

});
var feessModel = mongoose.model('freelancer', feessSchema);

app.post('/add', function (req, res) {
  console.log(req.body);

        var freelance = new feessModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        experience: req.body.experience,
        Notes: req.body.notes,
        competence:req.body.competence,
        competence1:req.body.competence1,
        competence2:req.body.competence2,
        competence3:req.body.competence3,
      });
      console.log(freelance);

      freelance.save(function (err, freelance) {
         console.log(freelance);
        // saved!
      });


});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
