var photoFormatter = require('../../src/flickr/photo-formatter');
var assert = require('chai').assert;

suite('photoFormatter', function() {
	test('format returns correct image', function() {
		var photo = getFlickrPhoto();

		var result = photoFormatter.format(photo);

		assert.equal(result.image, 'http://farm8.staticflickr.com/7081/7333526372_18da17bae2_n.jpg');
	});

	test('format returns correct url', function() {
		var photo = getFlickrPhoto();

		var result = photoFormatter.format(photo);

		assert.equal(result.url, 'http://www.flickr.com/photos/34671331@N07/7333526372');
	});

	test('format returns correct shortUrl', function() {
		var photo = getFlickrPhoto();

		var result = photoFormatter.format(photo);

		assert.equal(result.shortUrl, 'http://flic.kr/p/cb3eTS');
	});
});

function getFlickrPhoto() {
	return {
		id: '7333526372',
		owner: '34671331@N07',
		secret: '18da17bae2',
		server: '7081',
		farm: 8,
		title: 'IMG_4334',
		ispublic: 1,
		isfriend: 0,
		isfamily: 0
	};
}
