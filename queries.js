/* Fill out these functions using Mongoose queries*/

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
  Listing.findOne({ 'name': 'Library West' }, function (err, listing) {
    if (err) throw err;

    console.log("\nFinding Library West...\n");
    console.log(listing);
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
  Listing.findOne({ 'code': 'CABL' }, function (err, listing) {
    if (err) throw err;

    Listing.remove({ 'code': 'CABL' }, function (err) {
      if (err) throw err;
    });
    console.log("\nRemoving CABL...\n");
    console.log(listing);
  });
};


var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
  */
  Listing.findOne({ 'code': 'PHL' }, function (err, listing) {
    if (err) throw err;

    listing.address = "look in your heart and you will find it";

    listing.save(function (err) {
        if (err) throw err;
        console.log("\nUpdated Phelps Lab...\n");
        console.log(listing);
    });
  });
};

var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
  Listing.find(function (err, listing) {
    if (err) throw err;

    console.log("\nRetrieving all listings...\n");
    console.log(listing);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();


