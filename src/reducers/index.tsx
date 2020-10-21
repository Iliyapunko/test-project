import { combineReducers } from 'redux'
import { connectRouter, RouterState, RouterAction } from 'connected-react-router'
import { History } from 'history'
import main, { MainState, MainActions } from './main'

export type State = {
  router: RouterState
  main: MainState
}

type Actions = MainActions & RouterAction

const state = (history: History) =>
  combineReducers<State, Actions>({
    router: connectRouter(history),

    main,
  })

export default state
