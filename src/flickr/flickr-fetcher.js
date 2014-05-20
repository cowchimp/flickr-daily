var Flickr = require('flickrapi');
var config = require('./../config');
var photoFormatter = require('./photo-formatter');
var dateTimeRounder = require('./date-time-rounder');
var Q = require('q');

exports.fetch = function(dates) {
	var flickrOptions = {
		api_key: config.flickrApiKey,
		secret: config.flickrSecret
	};

	var tokenPromise = Q.nfcall(Flickr.tokenOnly, flickrOptions);

	var searchPromise = tokenPromise.then(function(flickr) {
		return Q.all(dates.map(function(date) {
			return getSearchPromise(date, flickr);
		}));
	});

	return searchPromise;
};

function getSearchPromise(date, flickr) {
	var searchArgs = {
		user_id: config.flickrUserId,
		page: 1,
		per_page: 100,
		min_taken_date: convertDateToUnix(dateTimeRounder.floor(date)),
		max_taken_date: convertDateToUnix(dateTimeRounder.ceil(date))
	};

	return Q.nfcall(flickr.photos.search, searchArgs).then(function(result) {
		var photos = result.photos.photo;
		photos = photos.map(photoFormatter.format);
		return {
			date: date,
			photos: photos
		}
	});
}

function convertDateToUnix(date) {
	return (+date)/1000;
}