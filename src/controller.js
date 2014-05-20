var flickrFetcher = require('./flickr/flickr-fetcher');
var photoMailer = require('./mail/photo-mailer');
var yearLeaper = require('./year-leaper');
var config = require('./config');

exports.run = function(date) {
	var dates = yearLeaper.leap(date, config.leaps);
	var flickrFetchPromise = flickrFetcher.fetch(dates);
	var sendMailPromise = flickrFetchPromise.then(sendMail);
	return sendMailPromise.catch(function(err) {
		console.error(err);
		throw err;
	});
};

function sendMail(photosByDates) {
	if(!config.shouldSendMailIfNoPhotos && !haveAnyPhotos(photosByDates)) {
		return;
	}
	return photoMailer.send(config.email, photosByDates);
}

function haveAnyPhotos(photosByDates) {
	return photosByDates.some(function(result) {
		return result.photos.length > 0;
	});
}