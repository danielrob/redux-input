# redux-input

> Connect input components to redux by passing an action and a selector.

[![NPM](https://img.shields.io/npm/v/redux-input.svg)](https://www.npmjs.com/package/redux-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save redux-input
```

## Basic Usage

```jsx
import React from 'react'
import { ReduxInput } from 'redux-input'
import { DatePicker } from 'antd'

import selectors from './selectors'
import actions from './actions'

const BasicExample = () => {
  return (
    <ReduxInput
      Component={DatePicker}
      selector={selectors.basicExampleInput}
      action={actions.basicExampleAction}
    />
  )
}
```

```jsx
// selectors.js
const basicExampleInput = (state) => state.basic.example.input

// actions.js
const basicExampleAction = (payload) => ({
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
```

## Documentation
Further examples are documented here

## License

MIT © [danielrob](https://github.com/danielrob)
