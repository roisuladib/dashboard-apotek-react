import React from 'react';
import { element } from 'prop-types';
import { TopBar } from './TopBar';

export const Content = ({ children }) => {
   return (
      <>
         <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <TopBar />

            <div className="px-6 pt-6 2xl:container">
               {
                  children
               }
            </div>
         </div>
      </>
   );
};

Content.prototype = {
   children: element.isRequired,
}