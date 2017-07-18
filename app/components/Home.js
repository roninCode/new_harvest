var React = require('react');
var Clock = require('./Clock');
var Duration = require('./Duration');
var Color = require('./Color');
var FirstForm = require('./FirstForm');
var Questionnare = require('./Questionnare');
var Reservations = require('./Reservations');
var Money = require('./Money');

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to your User Portal!</h1>
          <Clock />
          <Duration />
          <Color />
          <FirstForm />
          <Questionnare />
          <Reservations />
          <Money />
      </div>
    );
  }
}

module.exports = Home;