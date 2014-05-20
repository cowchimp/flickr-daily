flickr-daily
============

Sends an email with the flickr photos taken on this day in past years.

To get started
--------------
1. run `npm install`
2. rename `config.sample.js` to `config.js`
3. edit `config.js` with your mail and flickr settings
4. run `node src/app.js`  
  (the first run will be significantly slower as the [Flickr API](http://github.com/Pomax/node-flickrapi) module fetches & caches the API data from flickr)

To run daily
------------
On linux you can run this app daily as a cron job

1. run `crontab -e`
2. add this line  
  `30 5 * * * (cd flickr-daily && /usr/local/bin/node src/app.js)`  
  (this will run daily at 5:30)

License
-------

MIT