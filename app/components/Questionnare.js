var React = require('react');

class Questionnare extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {value: "Happiness"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You think that ' + this.state.value + ' is the most important thing in life!');
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What is the most important thing in life?!?!
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Happiness">Happiness</option>
            <option value="Compassion">Compassion</option>
            <option value="Money">Money</option>
            <option value="Love">Love</option>
            <option value="Discovery">Discovery</option>
          </select>
          <input type="submit" value="Submit" />
        </label>
      </form>
    )
  }
}


module.exports = Questionnare;