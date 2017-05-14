import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import LaundryList from './routes/LaundryList.js';

import LaundryStation from './routes/LaundryStation.js';

import LaundryMachine from './routes/LaundryMachine.js';

import LaundryLayout from "./routes/LaundryLayout.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/LaundryList" component={LaundryList} />
      <Route path="/LaundryStation/:laundryId" component={LaundryStation} />
      <Route path="/LaundryMachine/:machineId" component={LaundryMachine} />
      <Route path="/laundry" component={LaundryLayout}>
        <Route path="list" component={LaundryList} />
        <Route path="station/:stationId" component={LaundryStation} />
        <Route path="machine/:machineId" component={LaundryMachine} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
