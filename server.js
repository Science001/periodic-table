var pt=require('periodic-table');
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/jQuery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'jQuery.js'));
});

app.get('/up.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'up.png'));
});

app.get('/searchicon.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'searchicon.png'));
});

app.get('/favicon.png', function(req,res) {
	res.sendFile(path.join(__dirname,'favicon.png'));
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

app.get('/search', function(req,res) {
	var key=req.query.key;
	var i=1;
	if(isNaN(key)) {
		if(key.length<=2) {
			while(i<119) {
				if(pt.numbers[i].symbol.toLowerCase() === key.toLowerCase()) res.send(JSON.stringify(pt.numbers[i]));
				i++;
			}
			res.sendStatus(404);
		}
		else{
			while(i<119){
				if(pt.numbers[i].name.toLowerCase() === key.toLowerCase()) res.send(JSON.stringify(pt.numbers[i]));
				i++;
			}
			res.sendStatus(404);
		}
	}
	else {
		var num=parseInt(key);
		if(num>0 && num<119) res.send(pt.numbers[num]);
		else res.sendStatus(404);
	}
});

var port = 80;
app.listen(port, function () {
  console.log(`Listening on ${port}!`);
});
