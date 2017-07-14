var React = require('react');

class Clock extends React.Component {
  render () {
    return (
      <div>
        <h2>{new Date().toLocaleTimeString()}</h2>
      </div>
    )
  }
}

module.exports = Clock;