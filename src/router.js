import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import LaundryList from './routes/LaundryList.js';

import LaundryPoint from './routes/LaundryPoint.js';

import LaundryMachine from './routes/LaundryMachine.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/LaundryList" component={LaundryList} />
      <Route path="/LaundryPoint/:laundryId" component={LaundryPoint} />
      <Route path="/LaundryMachine/:machineId" component={LaundryMachine} />
    </Router>
  );
}

export default RouterConfig;
