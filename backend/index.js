var express = 			require('express'),
	passport = 			require('passport'),
	http = 				require('http'),
	path = 				require('path'),
	Sequelize = 		require('sequelize'),
  	sequelize = 		new Sequelize('kaicow', 'postgres', 'password', {
      dialect: "postgres", 
      port:    5432,
      omitNull: true
    }),
	app =				module.exports = express();


var env = 'development';
require('./config/passport')(passport);

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
	app.set('models', require('./models'));
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions

	app.use(allowCrossDomain);

	app.use(express.methodOverride());
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(app.router);
});

if (env === 'development') { app.use(express.errorHandler()); }



//app.get('/profile', isLoggedIn, function(req, res) { res.send(req.user); });


require('./routes.js')(app, passport);


http.createServer(app).listen(app.get('port'), function () { 
	console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;