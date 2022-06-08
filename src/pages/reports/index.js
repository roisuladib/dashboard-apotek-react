import React from 'react';
import { Sidebar, Content } from '../../components';
import { Transitions } from '../../animations'

export const Report = () => {
  return (
    <Transitions>
      <Sidebar />
      <Content>
        <h1>Report</h1>
      </Content>
    </Transitions>
  )
};