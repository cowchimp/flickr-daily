module.exports = {
	mailService: 'Mailgun', //nodemailer compatible service: Gmail, SendGrid, Mailgun, etc.
	mailUser: 'postmaster@sandbox123.mailgun.org',
	mailPass: 'pa$$w0rd',
	flickrApiKey: 'flickrApiKey', //generate an API key & secret here: https://www.flickr.com/services/apps/create/apply/
	flickrSecret: 'flickrSecret',
	flickrUserId: '12345678%91N01', //your flickr NSID. Google "flickr nsid" to find tools that will quickly find yours
	email: 'johnsmith@example.com', //where you want the email sent
	shouldSendMailIfNoPhotos: true,
	leaps: 10 //how many years back to search for photos
};