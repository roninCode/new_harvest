var React = require('react');

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

// lifecycle hook - runs after component output has been rendered to DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
// lifecycle hook - 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render () {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

module.exports = Clock;