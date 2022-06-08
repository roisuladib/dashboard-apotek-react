import React from 'react';
import { Sidebar, Content } from '../../components';
import { Transitions } from '../../animations';

export const Transaction = () => {
   return (
      <Transitions>
         <Sidebar />
         <Content>
            <h1>Transactions</h1>
         </Content>
      </Transitions>
   );
};