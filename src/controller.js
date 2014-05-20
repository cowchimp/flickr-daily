var flickrFetcher = require('./flickr/flickr-fetcher');
var photoMailer = require('./mail/photo-mailer');
var yearLeaper = require('./year-leaper');
var config = require('./config');

exports.run = function(date) {
	var dates = yearLeaper.leap(date, config.leaps);
	flickrFetcher.fetch(dates, handleResults);
};

function handleResults(err, photosByDates) { //TODO: handler errors
	if(!config.shouldSendMailIfNoPhotos && !haveAnyPhotos(photosByDates)) {
		return;
	}
	photoMailer.send(config.email, photosByDates);
}

function haveAnyPhotos(photosByDates) {
	return photosByDates.some(function(result) {
		return result.photos.length > 0;
	});
}