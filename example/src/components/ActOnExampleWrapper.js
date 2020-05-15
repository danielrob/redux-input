import React from 'react'
import { useSelector } from 'react-redux'
import outdent from 'outdent'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import selectors from '../selectors'

const ActOnExampleWrapper = ({ children }) => {
  const actOnExampleStore = useSelector(selectors.actOnExampleStore)
  return (
    <>
      <div className='Flex'>
        <div className='Rendered'>
          <h4>actOn example (using Ant Design Radio.Group): </h4>
          {children}
          <br />
          <br />
          The selector selects only state.actOn, but state.actOn.example.input is used for the value.
          <br />
          <br />
          <SyntaxHighlighter language='javascript' style={docco}>
            {outdent`
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
                  >
                    <Radio.Button value='option1'>Option 1</Radio.Button>
                    <Radio.Button value='option2'>Option 2</Radio.Button>
                  </ReduxInput>
                )
              }
            `}
          </SyntaxHighlighter>
          <h4>Setup:</h4>
          <SyntaxHighlighter language='javascript' style={docco}>
            {outdent`
              // selectors.js
              export const actOn = (state) => state.actOn

              // actions.js
              export const actOnExampleInputChange = (payload) => ({
                type: 'ACT_ON_EXAMPLE/CHANGE',
                payload,
              })

              // reducer.js
              import { createReducer } from '@reduxjs/toolkit'

              actOn: createReducer({ example: { input: null } }, {
                'ACT_ON_EXAMPLE/CHANGE': (_, { payload }) => payload
              })
            `}
          </SyntaxHighlighter>
        </div>

        <div>
          <h4>STORE STATE: </h4>
          <pre>{JSON.stringify(actOnExampleStore, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}

export { ActOnExampleWrapper }
