# meteor-test
Simple repo for testing MeteorJS page-refresh rate.

Run Meteor server with:
```
$ meteor
```
Open up [localhost:3000](http://localhost:3000) to see a blank page; for best results, open the developer console as well, to view `console.log`s about the page's status as it incorporates new data from the server.

Connect to Meteor's Mongo instance:
```
$ meteor mongo
```

Run various commands and observe the page's latency of showing updated data:
```
meteor:PRIMARY> for (var x = 0; x < 100; x++) { db.test.insert({ a: x, b: 2*x, c: (new Date()) }); }
meteor:PRIMARY> for (var x = 0; x < 1000; x++) { db.test.insert({ a: x, b: 2*x, c: (new Date()) }); }
meteor:PRIMARY> db.test.drop()
```

