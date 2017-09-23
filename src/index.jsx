import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


import store from './redux.config';
import Index from './containers/App'

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Index}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
