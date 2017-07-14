var React = require('react');

class Nav extends React.Component {
  render () {
    var dashboard_options = ["Audits", "Leaderboards", "Calendar"];
    return (
      <div>
        <ul className="dashboard_list">
          {dashboard_options.map(function(option) {
            return (
              <li key={option}>{option}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Nav;