var React = require('react');  
var Question1 = require('./Question1');
var Question2 = require('./Question2');
var Question3 = require('./Question3');
var Question4 = require('./Question4');

class Questions extends React.Component {
  render() {
    return (
      <div>
        <Question1 />
        <Question2 />
        <Question3 />
        <Question4 />
      </div>
    );
  }
}
  
module.exports = Questions;