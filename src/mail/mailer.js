var nodemailer = require('nodemailer');
var config = require('./../config');
var Q = require('q');

exports.sendMail = function(sender, recipient, subject, html) {
	var transport = createTransport();
	var sendMailArgs = {
		from: sender,
		to: recipient,
		subject: subject,
		html: html,
		forceEmbeddedImages: true
	};

	return Q.nfcall(transport.sendMail, sendMailArgs).finally(transport.close.bind(transport));
};

function createTransport() {
	return nodemailer.createTransport('SMTP', {
		service: config.mailService,
		auth: {
			user: config.mailUser,
			pass: config.mailPass
		}
	})
}