var chai = require('chai');
var assert = chai.assert;
chai.use(require('chai-datetime'));
var yearLeaper = require('../src/year-leaper');

suite('yearLeaper', function() {
	test('leap called with apr 1 2014 and 2 leaps, returns apr 1 2013 & 2012', function() {
		var date = new Date(Date.UTC(2014,3,1));

		var result = yearLeaper.leap(date, 2);

		assert.equal(result.length, 2);
		assert.equalTime(result[0], new Date(Date.UTC(2013,3,1)));
		assert.equalTime(result[1], new Date(Date.UTC(2012,3,1)));
	});
});