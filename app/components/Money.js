var React = require('react');

function YouGotTheMoney(props) {
  if (props.money >= 1000) {
    return <p>Dang you got enough money for this!</p>;
  }
  return <p>Ewwww.....awkward. You got to go to the ATM son!</p>;
}

class Money extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {money: ""};
  }

  handleChange(event) {
    this.setState({money: event.target.value});
  }

  render () {
    const money = this.state.money;
    return (
      <fieldset className="moneyMan">
        <legend>How much money you got?</legend>
        <input 
          value={money}
          onChange={this.handleChange} />
        <YouGotTheMoney money={parseFloat(money)} />
      </fieldset>
    );
  }
}

module.exports = Money;