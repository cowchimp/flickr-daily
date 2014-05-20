var hogan = require('hogan.js');
var fs = require('fs');
var moment = require('moment');
var path = require('path');

var mailTemplatePath = path.join(__dirname, '../../mail-template.html');
var templateText = fs.readFileSync(mailTemplatePath, 'utf8')
var template = hogan.compile(templateText);

exports.getMailHtml = function(photosByDates) {
	convertDatesToDisplayDates(photosByDates);
	var html = template.render({photosByDates: photosByDates});
	return removeWhitespace(html);
};

function convertDatesToDisplayDates(photosByDates) {
	photosByDates.forEach(function(obj) {
		obj.date = moment(obj.date).format('MMMM Do YYYY');
	});
}

function removeWhitespace(string) {
	return string.replace(new RegExp(/[\r\n\t]/g), '');
}