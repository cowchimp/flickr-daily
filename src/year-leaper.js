/**
 * @param {Date} date
 * @param {number} leaps
 * @returns {Array}
 */
exports.leap = function (date, leaps) {
	var dates = [];
	for(var i=0;i<leaps;i++) {
		date.setUTCFullYear(date.getUTCFullYear()-1);
		dates.push(new Date(date));
	}
	return dates;
};