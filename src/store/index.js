import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import reducers from './rootReducer';

const configureStore = (preloadedState) => {
  const enhancers = [
    applyMiddleware(reduxThunk)
  ];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  return createStore(
    reducers,
    preloadedState,
    compose(
      ...enhancers
    )
  );
};

export default configureStore;
