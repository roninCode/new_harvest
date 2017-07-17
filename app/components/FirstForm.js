var React = require('react');

class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Please tell us about yourself in 1000 characters or less'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Thank you for submitting: ' + this.state.value);
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <form className="first_form" onSubmit={this.handleSubmit}>
          <label>
            Name: 
              <textarea className="textarea_first" value={this.state.value} onChange={this.handleChange} />
              <br /><br />
              <input type="submit" value="Submit" />
          </label>
        </form>
        <h1>Can you see your name in the alert by submitting above?</h1>
      </div>
    )
  }
}


module.exports = FirstForm;
