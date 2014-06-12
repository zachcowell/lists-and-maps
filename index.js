var express = require('express'),
	routes = require('./routes'),
	api = require('./routes/api.js'),
	http = require('http'),
	path = require('path'),
	app = module.exports = express();

var env = 'development';

var mongoCredentials = process.env.MONGOCRED || 'mongodb://localhost/healthi';

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.configure(function(){
	app.set('env',env);
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(allowCrossDomain);
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(app.router);
});

if (env === 'development') { app.use(express.errorHandler()); }

app.get('/', routes.index);

app.get('/search', api.yelpSearch);

app.get('*', routes.index);


http.createServer(app).listen(app.get('port'), function () { 
	console.log('Express server listening on port ' + app.get('port'));
});