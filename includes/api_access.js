var tumblr = require('tumblr.js');
var config = require('../config/config');

function api_access() {
	"use strict";
};

api_access.prototype.getPhotoPosts = function getPhotoPosts(callback) {
	var client = tumblr.createClient({
		consumer_key: config.system.consumer_key
	});

	client.blogPosts('bijoux-et-mineraux.tumblr.com', {'type':'photo'}, function(err, resp) {
		  var posts = [];
		  resp.posts.forEach((post) => {
			 var curPost = {};
//			 console.log(post.id);
			 curPost.id = post.id;
			 curPost.photos = [];
			 post.photos.forEach((photo) => {
				 var curPhoto = {};
				 var photo_list_length = photo.alt_sizes.length;
//				 console.log(photo.alt_sizes[0].url);
				 curPhoto.url = photo.alt_sizes[0].url;
				 curPhoto.thumbnail = photo.alt_sizes[photo_list_length-1].url;
				 curPost.photos.push(curPhoto);
			 });
			 posts.push(curPost);
		  });
		  callback(posts);
	});
};

module.exports.api_access = api_access;