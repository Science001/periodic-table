var pt=require('periodic-table');
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/theme.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'theme.css'));
});

app.get('/fetch-details', function(req, res) {

	var id=parseInt(req.query.id);
	res.send(JSON.stringify(pt.numbers[id]));

});

var port = 80;
app.listen(port, function () {
  console.log(`Listening on ${port}!`);
});