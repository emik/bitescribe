/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './pages/App';
import HomePage from './pages/HomePage';
import BitesPage from './pages/BitesPage';
import CounterPage from './pages/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/bites" component={BitesPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
