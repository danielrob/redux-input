import React from 'react'
import { Tabs } from 'antd'

import { BasicExampleWrapper } from './BasicExampleWrapper'
import { BasicExample } from './BasicExample'
import { ActOnExampleWrapper } from './ActOnExampleWrapper'
import { ActOnExample } from './ActOnExample'
import { ReduxInputContextExampleWrapper } from './ReduxInputContextExampleWrapper'
import { ReduxInputContextExample } from './ReduxInputContextExample'

const { TabPane } = Tabs

const Page = ({ children }) => {
  return (
    <div className='Page'>
      <h1>Redux Input</h1>
      <Tabs defaultActiveKey='3' size='large' animated={false}>
        <TabPane tab='Basic Example' key='1'>
          <br />
          <BasicExampleWrapper>
            <BasicExample />
          </BasicExampleWrapper>
        </TabPane>
        <TabPane tab='"actOn" Example' key='2'>
          <br />
          <ActOnExampleWrapper>
            <ActOnExample />
          </ActOnExampleWrapper>
        </TabPane>
        <TabPane tab='ReduxInputContext Example' key='3'>
          <ReduxInputContextExampleWrapper>
            <ReduxInputContextExample />
          </ReduxInputContextExampleWrapper>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Page
