import React from 'react'
import { ReduxInput } from 'redux-input'
import { Radio } from 'antd'

import selectors from '../selectors'
import actions from '../actions'

const ActOnExample = () => {
  return (
    <ReduxInput
      Component={Radio.Group}
      actOn='example.input'
      selector={selectors.actOn}
      action={actions.actOnExampleInputChange}
      style={{
        padding: '10px 0'
      }}
    >
      <Radio.Button value='option1'>Option 1</Radio.Button>
      <Radio.Button value='option2'>Option 2</Radio.Button>
    </ReduxInput>
  )
}

export { ActOnExample }
