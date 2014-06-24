var FacebookStrategy = require('passport-facebook').Strategy;
var User       = require('../models/user');
var configAuth = require('./auth');


var getModels = function(req){
	var m = require('../models');
	return {
		User : m.User,
		Itinerary : m.Itinerary,
		List : m.List,
		ListItem : m.ListItem
	}
};

module.exports = function(passport,req) {
	var User = getModels().User;

	// used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.find({ where: { id: id } }).success(function(){
        	done(null,id);
        })
    });
    
    passport.use(new FacebookStrategy({

		// pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL

    },

    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {

		// asynchronous
		process.nextTick(function() {

			User.findOrCreate({ facebook_id: profile.id }, { 
					email: profile.emails[0].value,
					username: profile.emails[0].value,
					last_name: profile.name.familyName,
					first_name: profile.name.givenName,
					created_on : new Date(),
					last_login: new Date()
				})
				.success(function(user, created) { 
					console.log(user.values);
					done(null,user);
				})
			// find the user in the database based on their facebook id
	        /*User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

	        	// if there is an error, stop everything and return that
	        	// ie an error connecting to the database
	            if (err)
	                return done(err);

				// if the user is found, then log them in
	            if (user) {
	                return done(null, user); // user found, return that user
	            } else {
	                // if there is no user found with that facebook id, create them
	                var newUser            = new User();

					// set all of the facebook information in our user model
	                newUser.facebook.id    = profile.id; // set the users facebook id	                
	                newUser.facebook.token = token; // we will save the token that facebook provides to the user	                
	                newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
	                newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

					// save our user to the database
	                newUser.save(function(err) {
	                    if (err)
	                        throw err;

	                    // if successful, return the new user
	                    return done(null, newUser);
	                });
	            }

	        });*/
        });

    }));

};
