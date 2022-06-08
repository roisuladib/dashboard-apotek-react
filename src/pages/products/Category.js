import React from 'react';
import { Sidebar, Content } from '../../components';
import { Transitions } from '../../animations'

export const Category = () => {
  return (
    <Transitions>
      <Sidebar />
      <Content>
        <h1>Category</h1>
      </Content>
    </Transitions>
  )
}
