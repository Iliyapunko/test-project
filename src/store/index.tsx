import { createStore, applyMiddleware, compose } from 'redux'

import { routerMiddleware } from 'connected-react-router'

import history from './history'
import rootReducer from 'reducers'

const initialState = {}

const enhancers = []
const middleware = [routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer(history), initialState, composedEnhancers)

export default store
