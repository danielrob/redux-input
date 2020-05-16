import React from 'react'
import { ReduxInput } from 'redux-input'
import { DatePicker } from 'antd'

import selectors from '../selectors'
import actions from '../actions'

const BasicExample = () => {
  return (
    <ReduxInput
      Component={DatePicker}
      selector={selectors.basicExampleInput}
      action={actions.basicExampleInputChange}
      size='large'
    />
  )
}

export { BasicExample }
