var React = require('react');

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isRed: true}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isRed: !prevState.isRed
    }));
  }

  render() {
    return (
      <button className="color_button" onClick={this.handleClick}>
        {this.state.isRed ? ('Red') : ('Blue')}
      </button>
    )
  }
}


module.exports = Color;