var React = require('react');
var Nav = require('./Nav');
var Clock = require('./Clock');
var Duration = require('./Duration');
var Color = require('./Color');
var FirstForm = require('./FirstForm');
var Questionnare = require('./Questionnare');
var Reservations = require('./Reservations');
var Money = require('./Money');

class App extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Clock />
        <Duration />
        <Color />
        <FirstForm />
        <Questionnare />
        <Reservations />
        <Reservations />
        <Reservations />
        <Money />
      </div>
    )
  }
}


module.exports = App;