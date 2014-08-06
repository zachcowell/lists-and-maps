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
		},
		include: [ { model: models.ListItem, include: [models.Place] } ]
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
	var placeData = req.body.place;
	var listItemData = req.body.listItem;

	var authorizeListCreation = function(successCallback){
		models.List.find({user_id: parseInt(req.user), id: listItemData.listId })
			.success(successCallback);
	};

	var createListItemWhenAuthorized = function(list){

		var placeCreationOrDiscovery = function(successCallback){
			models.Place
				.findOrCreate({ yelp_biz_id: placeData.yelp_biz_id }, { 
					name: placeData.name,
					street_address1: placeData.street_address1,
					street_address2: placeData.street_address2,
					zip: placeData.zip,
					state: placeData.state,
					lat: placeData.lat,
					lng: placeData.lng
				 })
				.success(successCallback);
		};

		var listItemCreation = function(place){
			var newListItem = models.ListItem.build({
				list_id : list.id,
				place_id: place.id 
			})
			.save()
			.success(function(){ res.send('successfully saved list item'); });
			//.error(function(error){res.send(error); });
		};
		if (typeof list != 'undefined') { placeCreationOrDiscovery(listItemCreation); }
		else { console.log('No list found') }
	};

	authorizeListCreation(createListItemWhenAuthorized);
}