var shortlink = require('shortlink');

exports.format = function(photo) {
	return {
		image: getImageUrl(photo),
		url:getWebPageUrl(photo),
		shortUrl: getShortWebPageUrl(photo)
	}
};

function getImageUrl(photo) {
	return 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_n.jpg';
}

function getWebPageUrl(photo) {
	return 'http://www.flickr.com/photos/' + photo.owner + '/' + photo.id;
}

function getShortWebPageUrl(photo) {
	return 'http://flic.kr/p/' + shortlink.encode(photo.id);
}