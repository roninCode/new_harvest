var React = require('react');
var Nav = require('./Nav');
var Clock = require('./Clock');

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        
        <Clock />
      </div>
    )
  }
}


module.exports = App;