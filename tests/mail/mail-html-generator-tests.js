var assert = require('chai').assert;
var mailHtmlGenerator = require('../../src/mail/mail-html-generator');

suite('mailHtmlGenerator', function(){
	test('getMailHtml returns well formatted html', function(){
		var photos = [
			{
				date: new Date(Date.UTC(2014, 3, 1)),
				photos: [
					{
						image: 'http://farm9.staticflickr.com/8162/7333542220_1dede07808_n.jpg',
						url: 'http://www.flickr.com/photos/34671331@N07/7333542220',
						shortUrl: 'http://flic.kr/p/cb3jB7'
					}
				]
			},
			{
				date: new Date(Date.UTC(2013, 3, 1)),
				photos: []
			}

		];
		var expected = '<h2>April 1st 2014</h2><a href=\"http://www.flickr.com/photos/34671331@N07/7333542220\"><img src=\"http://farm9.staticflickr.com/8162/7333542220_1dede07808_n.jpg\" /></a><br/><a href=\"http://flic.kr/p/cb3jB7\">http://flic.kr/p/cb3jB7</a><br/><br/><h2>April 1st 2013</h2>No photos for this day<br/><br/>';

		var result = mailHtmlGenerator.getMailHtml(photos);

		assert.equal(result, expected);
	});
});