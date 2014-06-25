/* Contains all data access methods for lists and list-items */

var getModels = function(req){
	var m = require('../models');
	return {
		User : m.User,
		Itinerary : m.Itinerary,
		List : m.List,
		ListItem : m.ListItem
	}
};



exports.findAllUsers = function(req,res){
	var models = getModels(req);
	models.User.findAll({ include: [ { model: models.List, include: [models.ListItem] } ] }).success(function(users) {
	  res.send(JSON.stringify(users));
	});
}

exports.findLists = function(req,res){
	var models = getModels(req);
	models.List.findAll({
		where: {user_id: req.user}
	}).success(function(lists) {
		res.send('success');
		// project will be the first entry of the Projects table with the title 'aProject' || null
		// project.title will contain the name of the project
	});
}