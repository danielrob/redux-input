import React from 'react'
import { useSelector } from 'react-redux'
import outdent from 'outdent'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import selectors from '../selectors'

const BasicExampleWrapper = ({ children }) => {
  const basicExampleStore = useSelector(selectors.basicExampleStore)
  return (
    <div className='Flex'>
      <div className='Rendered'>
        <h4>Basic example (using Ant Design DatePicker): </h4>
        {children}
        <br />
        <br />
        <br />
        <br />
        <SyntaxHighlighter language='javascript' style={docco}>
          {outdent`
              import React from 'react'
              import { ReduxInput } from 'redux-input'
              import { DatePicker } from 'antd'

              import { basicExampleInput } from './selectors'
              import { basicExampleAction } from './actions'

              const BasicExample = ({ children }) => {
                return (
                  <ReduxInput
                    Component={DatePicker}
                    selector={basicExampleInput}
                    action={basicExampleAction}
                  />
                )
              }
            `}
        </SyntaxHighlighter>
        <h4>Setup:</h4>
        <SyntaxHighlighter language='javascript' style={docco}>
          {outdent`
              // selectors.js
              export const basicExampleInput = (state) => state.basic.example.input

              // actions.js
              export const basicExampleAction = (payload) => ({
                type: 'BASIC_EXAMPLE/CHANGE',
                payload,
              })

              // reducer.js
              import { createReducer } from '@reduxjs/toolkit'

              combineReducers({
                input: createReducer(null, {
                  'BASIC_EXAMPLE/CHANGE': (_, { payload }) => payload
                })
              })
            `}
        </SyntaxHighlighter>

      </div>

      <div>
        <h4>STORE STATE: </h4>
        <pre>{JSON.stringify(basicExampleStore, null, 2)}</pre>
      </div>
    </div>
  )
}

export { BasicExampleWrapper }
