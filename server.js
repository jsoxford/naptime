var express = require('express'),
    app = express();


app.locals.pretty = true;

app.use(express.favicon());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	res.render('home');
});

app.get('/npm/:package', function(req, res){
	var name = req.params.package;
	res.render('npm',{name:name});
});


var server = app.listen(3000);
console.log('Express server started on port %s', server.address().port);
