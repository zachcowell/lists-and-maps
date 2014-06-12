var yelp = require("yelp").createClient({
	  consumer_key: "HMcwEHLw2Jq0_8-XyCdb7g", 
	  consumer_secret: "lC1ED2xYxb06NRGpkqNf4lt7cvw",
	  token: "PCsz8LpOyCr3Q7SPLYUpOg9O8znR2OzF",
	  token_secret: "AoTZWo9ry4aeHFGFlnXCoCfs-58"
	});


exports.yelpSearch = function(req,res){
	yelp.search({term: "food", location: "Washington DC"}, function(error, data) {
		if (!error){ res.send(data); }
	});
}