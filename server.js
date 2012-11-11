var express = require('express'),
    app = express(),
    request = require('request');


app.locals.pretty = true;

app.use(express.favicon());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


app.locals.ctx = 'root';
app.locals.data = '';


app.post('/', function(req, res, next){
    var jsonStr = req.body.data,
        js = JSON.parse(jsonStr),
        deps = js.dependencies;

    res.locals.data = jsonStr;

    res.render('home', {deps:deps});

});

app.get('/', function(req, res){
    res.render('home',{deps:[]});
});

app.get('/npm/:name', function(req, res){
    var name = req.params.name;
    res.locals.ctx = 'package';
    res.render('npm',{name:name});
});

// /history?name=underscore
app.get('/history', function(req,res){

    var name = req.query.name;

    request('http://registry.npmjs.org/' + name, function(err, resp, body){
        if(err) return next(err);
        
        var json = JSON.parse(body);
        res.send(json.time);
    });
});


var server = app.listen(process.env.PORT || 3000);
console.log('Express server started on port %s', server.address().port);
