var nodemailer = require('nodemailer');
var config = require('./../config');

exports.sendMail = function(sender, recipient, subject, html) {
	var transport = createTransport();
	transport.sendMail({
		from: sender,
		to: recipient,
		subject: subject,
		html: html,
		forceEmbeddedImages: true
	}, function() {
		transport.close();
	});
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