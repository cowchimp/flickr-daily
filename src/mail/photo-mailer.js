var mailer = require('./mailer');
var config = require('./../config');
var mailHtmlGenerator = require('./mail-html-generator');
var _ = require('lodash');

exports.send = function(recipient, photosByDates) {
	var subject = 'Your flickr daily photos! - ' + getPhotosCount(photosByDates) + ' photos';
	photosByDates = filterOutEmptyDates(photosByDates);
	var html = mailHtmlGenerator.getMailHtml(photosByDates);
	mailer.sendMail('flickr-daily@server.fake', config.email, subject, html);
};

function getPhotosCount(photosByDates) {
	var sum = 0;
	_.forEach(photosByDates, function(photoByDate) {
		sum = sum + photoByDate.photos.length;
	});
	return sum;
}

function filterOutEmptyDates(photosByDates) {
	return _.filter(photosByDates, function(photoByDate) {
		return photoByDate.photos.length > 0;
	});
}