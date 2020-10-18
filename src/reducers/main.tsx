import get from 'lodash/get'
import ActionTypes from 'actionTypes/main'

const initialState = {
}

type Change = {
  type: 'change'
  payload: {
    loading: boolean
  }
}

type Action = Change

export default function (state = initialState, action: Action) {
  switch (action.type) {
    // case ActionTypes.SIGN_IN_REQUEST: {
    //   return { ...state }
    // }

    default: {
      return state
    }
  }
}
