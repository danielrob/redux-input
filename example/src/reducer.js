import { createReducer, combineReducers } from '@reduxjs/toolkit'

import actions from './actions'

const INITIAL_STATE = {
  basic: {
    example: {
      input: null
    }
  },
  actOn: {
    example: {
      input: "option1",
    }
  },
  contextExample: {
    example: {
      input1: "apples",
    }
  }
}

const reducer = combineReducers({
  basic: combineReducers({
    example: combineReducers({
      input: createReducer(INITIAL_STATE.basic.example.input, {
        [actions.basicExampleInputChange]: (_, { payload }) => payload
      })
    })
  }),
  actOn: createReducer(INITIAL_STATE.actOn, {
    [actions.actOnExampleInputChange]: (_, { payload }) => payload
  }),
  contextExample: createReducer(INITIAL_STATE.contextExample, {
    [actions.contextExampleInputChange]: (_, { payload }) => payload
  })
})

export default reducer
