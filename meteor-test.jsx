
var App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      tests: Test.find({}, { sort: { _id: -1 } }).fetch()
    }
  },
  render() {
    var rows = this.data.tests.map(function(t) {
      //console.log(t);
      return <tr key={t._id}>
        <td>{t._id.toString()}</td>
        <td>{t.a}</td>
        <td>{t.b}</td>
        <td>{t.c.toString()}</td>
      </tr>;
    });
    return <div>
      <h3>num: {this.data.tests.length}, now: {new Date().toString()}</h3>
      <table className="table table-bordered table-striped table-condensed">
        <thead>
        <tr>
          <th>_id</th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>;
  }
});

if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<App />, document.getElementById('root'));
  });
}
