
Test = new Mongo.Collection("test");

var h = null;

if (Meteor.isClient) {
  Tracker.autorun(function() {
    h = Meteor.subscribe("limit-test");
  });

} else if (Meteor.isServer) {
  Meteor.publish("limit-test", function() {
    var limitHandle = Test.find({}, { limit: 100 }).observeChanges({
      added: function(_id, t) {
        console.log("limit added: ", _id);
      },
      changed: function(_id, fields) {
        console.log("limit changed: ", _id);
      },
      removed: function(_id) {
        console.log("limit removed: ", _id);
      }
    });

    var skipHandle = Test.find({}, { skip: 1 }).observeChanges({
      added: function(_id, t) {
        console.log("skip added: ", _id);
      },
      changed: function(_id, fields) {
        console.log("skip changed: ", _id);
      },
      removed: function(_id) {
        console.log("skip removed: ", _id);
      }
    });

    var sortLimitHandle = Test.find({}, { sort: { _id: 1 }, limit: 100 }).observeChanges({
      added: function(_id, t) {
        console.log("sort-limit added: ", _id);
      },
      changed: function(_id, fields) {
        console.log("sort-limit changed: ", _id);
      },
      removed: function(_id) {
        console.log("sort-limit removed: ", _id);
      }
    });

    var noLimitHandle = Test.find({}, {}).observeChanges({
      added: function(_id, t) {
        console.log("no-limit added: ", _id);
      },
      changed: function(_id, fields) {
        console.log("no-limit changed: ", _id);
      },
      removed: function(_id) {
        console.log("no-limit removed: ", _id);
      }
    });

    this.ready();

    this.onStop(function() {
      limitHandle.stop();
      skipHandle.stop();
      sortLimitHandle.stop();
      noLimitHandle.stop();
    });

  });
}
