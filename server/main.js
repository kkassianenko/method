import { Meteor } from 'meteor/meteor';

PlayersList = new Mongo.Collection('players');

Meteor.startup(() => {
    
Meteor.publish('thePlayers', function() {
    var currentUserId = this.userId;
    return PlayersList.find({ createdBy: currentUserId});
   });
  // code to run on server at startup
});
