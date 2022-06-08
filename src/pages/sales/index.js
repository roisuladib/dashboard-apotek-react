import React from 'react';
import { Sidebar, Content } from '../../components';
import { Transitions } from '../../animations'

export const Sale = () => {
  return (
    <Transitions>
      <Sidebar />
      <Content>
        <h1>Sales</h1>
      </Content>
    </Transitions>
  )
}