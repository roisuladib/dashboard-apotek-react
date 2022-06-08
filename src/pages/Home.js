import React from 'react';
import { Sidebar, Content, Statictic } from '../components';
import { Transitions } from '../animations';

export const Home = () => {
  return (
    <Transitions>
      <Sidebar />
      <Content>
        <Statictic />
      </Content>
    </Transitions>
  );
};