
Meteor.publish("test", function() {
  return Test.find({}, { sort: { _id: -1 } });
});

// Only displaying the last 100 entries doesn't seem to improve things much / at all.
Meteor.publish("test-last-100", function() {
  return Test.find({}, { sort: { _id: -1 }, limit: 100 });
});
