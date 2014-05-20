var Flickr = require('flickrapi');
var async = require('async');
var config = require('./../config');
var photoFormatter = require('./photo-formatter');
var dateTimeRounder = require('./date-time-rounder');

exports.fetch = function(dates, callback) {
	var flickrOptions = {
		api_key: config.flickrApiKey,
		secret: config.flickrSecret
	};

	Flickr.tokenOnly(flickrOptions, function (error, flickr) {
		if (error) {
			callback(error);
		}

		async.mapSeries(dates, handle, callback);

		function handle(date, callback) {
			var searchArgs = {
				user_id: config.flickrUserId,
				page: 1,
				per_page: 100,
				min_taken_date: convertDateToUnix(dateTimeRounder.floor(date)),
				max_taken_date: convertDateToUnix(dateTimeRounder.ceil(date))
			};

			flickr.photos.search(searchArgs, function(err, result) {
				if(err) {
					callback(err);
				}

				var photos = result.photos.photo;
				photos = photos.map(photoFormatter.format);
				callback(false, {
					date: date,
					photos: photos
				});
			});
		}
	});
};

function convertDateToUnix(date) {
	return (+date)/1000;
}