/* Contains all data access methods for lists and list-items */
var models = require('../models');

exports.findAllLists = function(req,res){
	models.List.findAll({
		where: {user_id: req.user}
	}).success(function(lists) {
		res.send(lists);
	});
}

exports.createList = function(req,res){
	var newList = models.List.build({
		user_id: parseInt(req.user),
		name: "some list i made", //req param
		created_on: new Date(), 
		is_public: true, //default?
		is_deleted: false
	})
	.save()
	.success(function(){ res.send('successfully saved newlist'); })
	.error(function(error){res.send(error); });
}

exports.createListItem = function(req,res){
	/* 
		Step 1: Find or Create place with req yelp id 
	   	Step 2: use the returned id to create new list item
	*/
	var newList = models.ListItem.build({
		list_id : 1,//req param
		place_id: 4234 //req param
	})
	.save()
	.success(function(){ res.send('successfully saved list item'); })
	.error(function(error){res.send(error); });
}