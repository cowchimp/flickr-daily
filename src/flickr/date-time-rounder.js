exports.floor = function(date) {
	date = deepCopyDate(date);
	date.setUTCHours(0,0,0,0);
	return date;
};

exports.ceil = function(date) {
	date = deepCopyDate(date);
	date.setUTCHours(23,59,59,0);
	return date;
};

function deepCopyDate(date) {
	return new Date(date);
}