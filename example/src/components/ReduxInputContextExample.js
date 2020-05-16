import React from 'react'
import { ReduxInput, ReduxInputContext } from 'redux-input'
import { Radio, Select } from 'antd'

import selectors from '../selectors'
import actions from '../actions'

const ReduxInputContextExample = () => {
  return (
    <ReduxInputContext
      selector={selectors.contextExample}
      action={actions.contextExampleInputChange}
    >
      <ReduxInput
        Component={Radio.Group}
        actOn='example.input1'
      >
        <Radio.Button value='apples'>Apples</Radio.Button>
        <Radio.Button value='oranges'>Oranges</Radio.Button>
      </ReduxInput>
      <ReduxInput
        Component={Select}
        actOn='example.input2'
        placeholder="Please select"
        style={{
          minWidth: 200,
          marginLeft: 20
        }}
      >
        <Select.Option value='apples'>Apples</Select.Option>
        <Select.Option value='oranges'>Oranges</Select.Option>
      </ReduxInput>
    </ReduxInputContext>
  )
}

export { ReduxInputContextExample }
