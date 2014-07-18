var configAuth = require('../config/auth');

var yelp = require("yelp").createClient({
	  consumer_key: configAuth.yelpAuth.consumer_key, 
	  consumer_secret: configAuth.yelpAuth.consumer_secret,
	  token: configAuth.yelpAuth.token,
	  token_secret: configAuth.yelpAuth.token_secret
	});


exports.yelpSearch = function(req,res){
	var term = req.params.term;
	yelp.search({term: term, location: "Washington DC"}, function(error, data) {
		if (!error){ res.send(data); }
	});
}