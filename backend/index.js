var express = require('express'),
	routes = require('./routes'),
	api = require('./routes/api.js'),
	http = require('http'),
	path = require('path'),
	Sequelize = require('sequelize'),
  	sequelize = new Sequelize('LAM', 'root', ''),
	Admin = sequelize.import("./models/admin.js"), 
	Itinerary = sequelize.import("./models/itinerary.js"), 
	ItineraryItem = sequelize.import("./models/itinerary_item.js"), 
	List = sequelize.import("./models/list.js"), 
	ListItem = sequelize.import("./models/list_item.js"), 
	Logs = sequelize.import("./models/logs.js"), 
	Place = sequelize.import("./models/place.js"), 
	User = sequelize.import("./models/user.js"), 
	UserPreferences = sequelize.import("./models/user_preferences.js"), 
	app = module.exports = express();

var env = 'development';

/*
User.hasMany(models.Itinerary),
User.hasMany(models.List),
User.hasMany(models.Logs),
User.hasMany(models.Admin),
User.hasOne(models.UserPreferences)
Itinerary.hasMany(models.ItineraryItem),
Itinerary.belongsTo(models.User)
ItineraryItem.hasOne(models.Place),
ItineraryItem.belongsTo(models.Itinerary)
Place.belongsTo(models.ListItem),
Place.belongsTo(models.ItineraryItem)
ListItem.belongsTo(models.List),
ListItem.hasOne(models.Place)
List.hasMany(models.ListItem),
List.belongsTo(models.User)
Admin.belongsTo(models.User)
UserPreferences.belongsTo(models.User)
Logs.belongsTo(models.User)
*/

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




 
sequelize.sync().success(function() {
  /*User.create({
	  id: null,
	  email: "goober",
	  username: "sdvfffffff",
	  last_name: "sdf",
	  first_name: "sdf",
	  password: "sdf",
	  created_on : new Date(1986,11,08),
	  last_login: new Date(1986,11,08) 
  }).success(function(sdepold) {
    console.log(sdepold.values)
  })*/
})




http.createServer(app).listen(app.get('port'), function () { 
	console.log('Express server listening on port ' + app.get('port'));
});