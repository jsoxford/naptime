var express = require('express'),
    app = express();


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));


var server = app.listen(3000);
console.log('Express server started on port %s', server.address().port);
