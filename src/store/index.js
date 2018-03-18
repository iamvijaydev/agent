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

// const enhancer = compose(
//     // Middleware you want to use in development:
//     applyMiddleware(reduxThunk, reduxPackMiddleware),
//     // Required! Enable Redux DevTools with the monitors you chose
//     DevTools.instrument()
// );

// const store = createStore(rootReducer, initialState, enhancer);

export default configureStore;
