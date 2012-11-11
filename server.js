var express = require('express'),
    app = express();


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


app.post('/', function(req, res, next){
    var jsonStr = req.body.data;

    try {
        var json = req.body.data,
            js = JSON.parse(json);

        res.send({"DEPS TO GET": js.dependencies});

    } catch (e){
        res.send({error:e.toString()});
    }
});

app.get('/', function(req, res){
    res.render('home',{ctx:'root'});
});

app.get('/npm/:name', function(req, res){
    var name = req.params.name;
    res.render('npm',{ctx:'package', name:name});
});


var server = app.listen(3000);
console.log('Express server started on port %s', server.address().port);
