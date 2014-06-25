// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
	'facebookAuth' : {
		'clientID' 		: '786161521423364', // your App ID
		'clientSecret' 	: 'b000b036cbebd67638574e3f5cdfafa7', // your App Secret
		'callbackURL' 	: 'http://localhost:3000/auth/facebook/callback'
	},
	'yelpAuth' : { 
		'consumer_key': 'HMcwEHLw2Jq0_8-XyCdb7g', 
		'consumer_secret': 'lC1ED2xYxb06NRGpkqNf4lt7cvw',
		'token': 'PCsz8LpOyCr3Q7SPLYUpOg9O8znR2OzF',
		'token_secret': 'AoTZWo9ry4aeHFGFlnXCoCfs-58'
	},
	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};