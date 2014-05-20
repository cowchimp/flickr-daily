var mailer = require('./mailer');
var config = require('./../config');
var mailHtmlGenerator = require('./mail-html-generator');

exports.send = function(recipient, photosByDates) {
	var subject = 'Your flickr daily photos! - ' + getPhotosCount(photosByDates) + ' photos';
	photosByDates = filterOutEmptyDates(photosByDates);
	var html = mailHtmlGenerator.getMailHtml(photosByDates);
	mailer.sendMail('flickr-daily@server.fake', config.email, subject, html);
};

function getPhotosCount(photosByDates) {
	var sum = 0;
	photosByDates.forEach(function(photoByDate) {
		sum = sum + photoByDate.photos.length;
	});
	return sum;
}

function filterOutEmptyDates(photosByDates) {
	return photosByDates.filter(function(photoByDate) {
		return photoByDate.photos.length > 0;
	});
}