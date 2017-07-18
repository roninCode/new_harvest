var React = require('react');
var NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
  render () {
    return (
      <div>
        <ul className="dashboard_list">
          <li>
            <NavLink exact activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/audits'>
              Audits
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/leaders'>
              Leaders
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='active' to='/calendar'>
              Calendar
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = Nav;