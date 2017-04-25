import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import LaundryList from './routes/LaundryList.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/LaundryList" component={LaundryList} />
    </Router>
  );
}

export default RouterConfig;
