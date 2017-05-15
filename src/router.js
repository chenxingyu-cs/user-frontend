import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import LaundryList from './routes/LaundryList.js';

import LaundryStation from './routes/LaundryStation.js';

import LaundryMachine from './routes/LaundryMachine.js';

import LaundryLayout from "./routes/LaundryLayout.js";

import UserLayout from "./routes/user/UserLayout.js";

import UserSignup from "./routes/user/UserSignup.js";

import UserSignin from "./routes/user/UserSignin.js";

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
      <Route path="/user" component={UserLayout}>
        <Route path="signup" component={UserSignup} />
        <Route path="signin" component={UserSignin} />
      </Route>
      <Route path="/userSignup" component={UserSignup} />
      <Route path="/userSignin" component={UserSignin} />
    </Router>
  );
}

export default RouterConfig;
