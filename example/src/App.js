import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'

import Page from './components/Page'
import reducer from './reducer'

const store = configureStore({ reducer })

const App = () => (
  <Provider store={store}>
    <Page>hello</Page>
  </Provider>
)

export default App
