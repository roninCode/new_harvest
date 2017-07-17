var React = require('react');
var Nav = require('./Nav');
var Clock = require('./Clock');
var Duration = require('./Duration');
var Color = require('./Color');

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Clock />
        <Duration />
        <Color />
      </div>
    )
  }
}


module.exports = App;