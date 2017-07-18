var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');
var Questions = require('./Questions/Questions');
var Home = require('./Home');


class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/audits' component={Questions} />
          </Switch>
        </div>
      </Router>
    )
  }
}


module.exports = App;