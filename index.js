var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');

var db = require('./config/db.js');

var port = process.env.PORT || 8080;

mongoose.connect(db.url);

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

require('./app/routes')(app);

app.listen(port);

console.log('Magic happens on port ' + port);
