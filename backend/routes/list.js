/* Contains all data access methods for lists and list-items */
var models = require('../models');

exports.findAllLists = function(req,res){
	models.List.findAll({
		where: {user_id: req.user}
	}).success(function(lists) {
		res.send('success');
		// project will be the first entry of the Projects table with the title 'aProject' || null
		// project.title will contain the name of the project
	});
}

exports.createList = function(req,res){
	var newList = models.List.build({
		user_id: parseInt(req.user),
		name: "some list i made",
		created_on: new Date(),
		is_public: true,
		is_deleted: false
	})
	.save()
	.success(function(){ res.send('successfully saved newlist'); })
	.error(function(error){res.send(error); });
}