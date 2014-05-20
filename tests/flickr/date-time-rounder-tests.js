var dateTimeRounder = require('../../src/flickr/date-time-rounder');
var chai = require('chai');
var assert = chai.assert;
chai.use(require('chai-datetime'));

suite('dateTimeRounder', function() {
	test('floor called, returns same date with 0:0:0 time', function() {
		var date = new Date(Date.UTC(2014, 3, 1, 12, 30, 41));

		var result = dateTimeRounder.floor(date);

		assert.equalTime(result, new Date(Date.UTC(2014, 3, 1, 0, 0, 0)));
	});

	test('floor called, does not change original date', function() {
		var date = new Date(Date.UTC(2014, 3, 1, 12, 30, 41));

		var result = dateTimeRounder.floor(date);
		date.setUTCFullYear(2013);

		assert.equalTime(result, new Date(Date.UTC(2014, 3, 1, 0, 0, 0)));
	});

	test('ceil called, returns same date with 23:59:59 time', function() {
		var date = new Date(Date.UTC(2014, 3, 1, 12, 30, 41));

		var result = dateTimeRounder.ceil(date);

		assert.equalTime(result, new Date(Date.UTC(2014, 3, 1, 23, 59, 59)));
	});

	test('ceil called, does not change original date', function() {
		var date = new Date(Date.UTC(2014, 3, 1, 12, 30, 41));

		var result = dateTimeRounder.ceil(date);
		date.setUTCFullYear(2013);

		assert.equalTime(result, new Date(Date.UTC(2014, 3, 1, 23, 59, 59)));
	});
});
