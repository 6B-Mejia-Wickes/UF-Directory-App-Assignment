/* Fill out these functions using Mongoose queries*/

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

    mongoose.connect(config.db.uri);

    //read JSON file
    // var listings = JSON.parse(fs.readFileSync('listings.json', 'utf8')).entries;

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
  Listing.findOne({ 'name': 'Library West' }, function (err, listing) {
  if (err) return handleError(err);
    console.log(listing) // Space Ghost is a talk show host.
  })



};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOne({ 'code': 'CABL' }, function (err, listing) {
   if (err) return handleError(err);
     console.log(listing) // Space Ghost is a talk show host.

   })
   Listing.remove({ 'code': 'CABL' }, function (err) {
   if (err) return handleError(err);
   })
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.collection.update(
     { "code": "PHL"},
     {
       "address": "AHHHHH LOOK AT THTA IT CHANGED"
     }
   )

   Listing.findOne({ 'code': 'PHL' }, function (err, listing) {
   if (err) return handleError(err);
     console.log(listing) // Space Ghost is a talk show host.
   })

  //  MyModel.findOneAndUpdate({ "code": "PHL"}, listing.newData, {upsert:true}, function(err, listing){
  //   if (err) return res.send(500, { error: err });
  //   return res.send("succesfully saved");
  //   });
   //
   //

};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find(function (err, listing) {
     if (err) return console.error(err);
     console.log(listing);
   })
};
//
// findLibraryWest();
// removeCable();
updatePhelpsMemorial();
retrieveAllListings();
