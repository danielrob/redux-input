import { createAction } from '@reduxjs/toolkit'

const basicExampleInputChange = createAction('BASIC_EXAMPLE/CHANGE')
const actOnExampleInputChange = createAction('ACT_ON_EXAMPLE/CHANGE')
const contextExampleInputChange = createAction('CONTEXT_EXAMPLE/CHANGE')

const actions = {
  basicExampleInputChange,
  actOnExampleInputChange,
  contextExampleInputChange
}

export default actions
