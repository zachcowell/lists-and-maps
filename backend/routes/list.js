/* Contains all data access methods for lists and list-items */
var models = require('../models');

exports.findAllLists = function(req,res){
	models.List.findAll({
		where: {user_id: req.user}
	}).success(function(lists) {
		res.send(lists);
	});
}

exports.findList = function(req,res){
	models.List.findAll({
		where: {
			user_id: req.user,
			id: req.params.id
		}
	}).success(function(lists) {
		res.send(lists);
	});
}

exports.createList = function(req,res){
	var newList = models.List.build({
		user_id: parseInt(req.user),
		name: req.body.listName,
		created_on: new Date(), 
		is_public: true, //default?
		is_deleted: false
	})
	.save()
	.success(function(){ res.send('successfully saved newlist'); })
	.error(function(error){res.send(error); });
}

exports.createListWithItem = function(req,res){
	var newList = models.List.build({
		user_id: parseInt(req.user),
		name: req.body.listName,
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
		Later: abstract List and Place away from each other and make this more modular
	*/

	var yelpBusinessId = req.body.yelp.id;

	models.Place
		.findOrCreate({ yelp_biz_id: yelpBusinessId }, { 
			name: req.body.yelp.name,
			street_address1: req.body.yelp.location.address,
			street_address2: null,
			zip: req.body.yelp.location.postal_code,
			state: req.body.yelp.location.state_code,
			lat: req.body.yelp.location.coordinate.latitude,
			lng: req.body.yelp.location.coordinate.longitude
		 })
		.success(function(place, created) {
			console.log(place.values);
			console.log(created);
  		});




	var newList = models.ListItem.build({
		list_id : 1,//req param
		place_id: 4234 //req param
	})
	.save()
	.success(function(){ res.send('successfully saved list item'); })
	.error(function(error){res.send(error); });
}