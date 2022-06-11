import React from 'react';
import { Sidebar, Content } from '../../components';
import { Transitions } from '../../animations';

export const Transaction = () => {
   return (
      <Transitions>
         <Sidebar />
         <Content>
            <h1>Transactions</h1>
            {/* <div className="w-full overflow-x-auto">
               <table className="table-auto w-full border-collapse">
                  <thead>
                     <tr className="bg-gradient-to-r from-sky-600 to-cyan-400 align-middle">
                        <th className="text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">No</th>
                        <th className="text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">Image</th>
                        <th className="text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        image?.length > 0
                        && image?.map((img, index) => {
                           return (
                              <tr key={index}>
                                 <td>{index + 1}</td>
                                 <td>
                                    <div className="relative overflow-hidden w-52 h-52 rounded-3xl md:block">
                                       <img className="object-cover w-full h-full" src={img.image} alt="" />
                                       <div className="absolute inset-0 rounded-3xl shadow-inner" aria-hidden="true"></div>
                                    </div>
                                 </td>
                                 <td>
                                    <span className="border border-pink-500
                              cursor-pointer
                              py-2
                              px-6
                              text-pink-500
                              inline-block
                              rounded
                              hover:bg-pink-500 hover:text-white">
                                       Delete
                                    </span>
                                 </td>
                              </tr>
                           );
                        })
                     }
                  </tbody>
               </table>
            </div> */}
         </Content>
      </Transitions>
   );
};