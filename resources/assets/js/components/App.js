import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import StatsPage from './stats/StatsPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/stats" component={StatsPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;