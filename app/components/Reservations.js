var React = require('react');

class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log('the event is: ' + event );
    const target = event.target;
    console.log('target is: ' + target);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log('value is: ' + value);
    const name = target.name;
    console.log('name is ' + name);
    
    this.setState({
      [name]: value
    });
  }

  render () {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Number of Guests: 
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

module.exports = Reservations;
