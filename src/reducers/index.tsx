import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import main from './main'

export default (history: History) => combineReducers({
  router: connectRouter(history),

  main
})