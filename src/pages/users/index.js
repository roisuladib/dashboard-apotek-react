import React from 'react';
import { Sidebar, Content } from '../../components';
import { Transitions } from '../../animations';

export const User = () => {
  return (
    <Transitions>
      <Sidebar />
      <Content>
        <h1>Users</h1>
      </Content>
    </Transitions>
  )
}