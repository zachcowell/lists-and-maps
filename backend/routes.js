var routes = 	require('./routes'),
	api = 		require('./routes/api.js'),	
	userAPI = 	require('./routes/user.js'),
	listAPI = 	require('./routes/list.js');

module.exports = function(app, passport) {
	// route middleware to make sure a user is logged in
	var isLoggedIn = function(req, res, next) {
		// if user is authenticated in the session, carry on
		if (req.isAuthenticated()) { return next(); }
		// if they aren't redirect them to the home page
		res.redirect('/');
	}

	app.get('/', function(req, res) { res.send("root; make a selection"); });
	app.get('/search', isLoggedIn, api.yelpSearch);
	app.get('/find', userAPI.findAllUsers);
	//app.get('*', routes.index);

	app.get('/lists',isLoggedIn,listAPI.findAllLists);
	app.get('/lists/create',isLoggedIn,listAPI.createList);
	app.get('/lists/item/create',isLoggedIn,listAPI.createListItem);
		

	app.get('/profile', isLoggedIn, function(req, res) { res.send(req.user); });
	app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
	app.get('/auth/facebook/callback',
	passport.authenticate('facebook', {
		successRedirect : '/profile',
		failureRedirect : '/'
	}));

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});


}