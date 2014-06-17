
var getModels = function(req){
	var m = req.app.get('models');
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

exports.responseTest = function(req,res){ res.send("What"); }