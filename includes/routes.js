var api_access = require('./api_access').api_access;

module.exports = exports = function(app) {
	"use strict";
	
	app.get('/', (req, res) => {
		var api = new api_access();
		api.getPhotoPosts(function(posts) {
			res.render('home', { 'posts': posts });			
		});
	});
	
	
};