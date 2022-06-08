import React from 'react';
import { Sidebar, Content } from '../../components';
import { Transitions } from '../../animations';

export const Product = () => {
  return (
    <Transitions>
      <Sidebar />
      <Content>
        <h1>Product</h1>
      </Content>
    </Transitions>
  )
}

export { Category } from './Category';