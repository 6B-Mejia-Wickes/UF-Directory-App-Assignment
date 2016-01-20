'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);

//read JSON file
var listings = JSON.parse(fs.readFileSync('listings.json', 'utf8')).entries;

//counter to keep track of our callbaacks and disconnect db
var counter = 0; 

var callback = function(err){
  if(err) throw err; 

  counter++;
  if(counter === listings.length) mongoose.disconnect(); 
}

for(var i = 0; i < listings.length; ++i){
  new Listing(listings[i]).save(callback);
}


