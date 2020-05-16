# Redux Input

> Connect input components to redux with just an action creator and a selector.

[![NPM](https://img.shields.io/npm/v/redux-input.svg)](https://www.npmjs.com/package/redux-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save redux-input
```

## Example

See all examples [here](https://danielrob.github.io/redux-input/)

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

## Why?
Not all inputs relate to forms, and wiring such inputs by hand can be tedious. Redux input leaves you with the flexibility to define where you hook the input state into the store but simplifes the JSX side of things. 


## Dear Early Adopters
This package is very much in the experimental stage. Please add an issue if you have any questions, suggestions, or functionality requests. In particular this package presently requires both lodash and ramda as peer dependencies which is clearly overkill. Obvious functionality to support might be e.g. onFocus & onBlur events, and I have a possible idea about having local state for textual inputs (turned on by a prop) until they are blurred, since textual input can be a performance problem. 

## Documentation / API

### `ReduxInput` props: 
###### `Component` {Component} - any component accepting `value` and `onChange` props. `onChange` can pass either an event or the new value.
###### `selector` {function} - a redux selector that returns the state that ReduxInput should act on. If neither `actOn` nor `format` props are provided this would be the value. 
###### `action` {function} - an action creator function
###### `actOn` {string|array} - allows you to specify a sub-path of the state selected by the selector to treat as the value. In this case the action creator will receive a copy of the selected state immutably updated with the new value at the specified `actOn` path. Example values: `a.b[0]` or `["a", "b", 0]`. 
###### `parse` {function} - storeValue => displayValue - e.g. formattedDate => parseDate(formattedDate)
###### `format` {function} - displayValue => storeValue - e.g. parsedDate => formatDate(parsedDate). 
###### `props` {object} - any props you wish to explicitly pass to the underlying component. 
###### `...rest` - all remaining props will be passed to the underlying component
  
<br>

### `ReduxInputContext` props: 
###### `selector` {function} - a redux selector that all underyling `ReduxInput` components should use (in conjunction with the `actOn` prop). 
###### `action` {function} - an action creator function that all underlying `ReduxInput` components should use. 
###### `Component` {Component} - defaults to React.Fragment. 
###### `children` {\*} Children that should be rendered inside the context. 
###### `...props` - all remaining props will be passed to the Component. 

<br>

Please [see examples here](https://danielrob.github.io/redux-input/).


## License

MIT © [danielrob](https://github.com/danielrob)
