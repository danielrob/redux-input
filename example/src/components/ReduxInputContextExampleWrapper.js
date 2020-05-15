import React from 'react'
import { useSelector } from 'react-redux'
import outdent from 'outdent'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import selectors from '../selectors'

const ReduxInputContextExampleWrapper = ({ children }) => {
  const store = useSelector(selectors.contextExampleStore)
  return (
    <>
      <div className='Flex'>
        <div className='Rendered'>
          <h4>ReduxInputContext example (using Ant Design Components): </h4>
          {children}
          <br />
          <br />
          In conjunction with `actOn` this allows you to share a selector and action
          <br/> across multiple inputs, but specifying them only once:
          <br />
          <br />
          <SyntaxHighlighter language='javascript' style={docco}>
            {outdent`
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
                    >
                      <Select.Option value='apples'>Apples</Select.Option>
                      <Select.Option value='oranges'>Oranges</Select.Option>
                    </ReduxInput>
                  </ReduxInputContext>
                )
              }
            `}
          </SyntaxHighlighter>
          <h4>Setup:</h4>
          <SyntaxHighlighter language='javascript' style={docco}>
            {outdent`
              // selectors.js
              export const contextExample = (state) => state.actOn

              // actions.js
              export const contextExampleInputChange = (payload) => ({
                type: 'CONTEXT_EXAMPLE/CHANGE',
                payload,
              })

              // reducer.js
              import { createReducer } from '@reduxjs/toolkit'

              contextExample: createReducer({ example: { input1: "apples" } }, {
                'CONTEXT_EXAMPLE/CHANGE': (_, { payload }) => payload
              })
            `}
          </SyntaxHighlighter>
        </div>

        <div>
          <h4>STORE STATE: </h4>
          <pre>{JSON.stringify(store, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}

export { ReduxInputContextExampleWrapper }
