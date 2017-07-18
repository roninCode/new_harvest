var React = require('react');

class Question3 extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {selectedButton: 'option1'};
  }

  handleInputChange(event) {
    this.setState({selectedButton: event.target.value})
  }

  render () {
    return (
      <div>
        <div>
          <h3>Food Temperature</h3>
        </div>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={this.state.selectedButton === 'option1'} onChange={this.handleInputChange} />
                Excellent
            </label>
          </div>
       
          <div className="radio">
            <label>
              <input type="radio" value="option2" checked={this.state.selectedButton === 'option2'} onChange={this.handleInputChange} />
                Good
            </label>
          </div>
       
          <div className="radio">  
            <label>
              <input type="radio" value="option3" checked={this.state.selectedButton === 'option3'} onChange={this.handleInputChange} /> 
                Par            
            </label>
          </div>
       
          <div className="radio">
            <label>
              <input type="radio" value="option4" checked={this.state.selectedButton === 'option4'} onChange={this.handleInputChange} />
                Fail
            </label>
          </div>
        </form>

      </div>
    );
  }

}


module.exports = Question3;