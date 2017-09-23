import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import {
  routerMiddleware
} from 'react-router-redux';
import {
  persistStore,
  autoRehydrate
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createBrowserHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import reducers from 'reducers';
import sagas from 'sagas';
import persistConfig from './persist.config';
import * as StartupActions from 'reducers/startup';

const middleware = [];
const enhancers  = [];

const history    = createBrowserHistory();
const mw_history = routerMiddleware(history);
middleware.push(mw_history);
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

if (process.env.NODE_ENV === 'dev') {
  const mw_logger = createLogger({});
  middleware.push(mw_logger)
}

// 合并中间件
enhancers.push(applyMiddleware(...middleware));
// persist rehydrate
enhancers.push(autoRehydrate());

const store = createStore(
  reducers,
  compose(...enhancers)
);

// persist
persistStore(store, persistConfig, () => store.dispatch(StartupActions.startup()));

// kick off root saga
sagaMiddleware.run(sagas);

export default store;