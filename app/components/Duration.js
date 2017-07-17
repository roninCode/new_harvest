var React = require('react');

class Duration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  componentDidMount() {
    this.counterId = setInterval(
      () => this.counter(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  counter() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
  }

  render () {
    return (
      <div>
        <h1>You've been on this page for {this.state.count} seconds!</h1>
        <h2>Which is {(this.state.count / 60).toPrecision(2)} minutes!</h2>
        <h3>And {(this.state.count / 3600).toPrecision(2)} hours!</h3>
      </div>  
    )
  }
}


module.exports = Duration;