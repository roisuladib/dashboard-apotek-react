import React, { useEffect, useState } from 'react';
import { Sidebar, Content } from '../components';
import { Transitions } from '../animations';
import { getAll } from '../apis';
import { ReactComponent as IcView } from '../assets/images/ic-trash.svg';

export const Assets = () => {
  const [image, setImage] = useState({});
  useEffect(() => {
    window.scroll(0, 0);
    getAll().then(res => setImage(res));
  }, [])

  return (
    <Transitions>
      <Sidebar />
      <Content>
        <div className="text-gray-700 font-medium text-xl mb-2">Assets</div>
        <div className="mx-auto max-w-screen-lg lg:max-w-screen-2xl xl:max-w-screen-xl">
          <ul className="flex flex-wrap min-w-full -mx-2">
            {
              image?.length > 0
                ? image?.map(img => {
                  return (
                    <li key={img?.id} className="w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 p-2">
                      <div className="group relative p-2 hover:p-0 overflow-hidden w-full h-full rounded-lg bg-white shadow hover:shadow-lg hover:-translate-y-2 hover:scale-105 cursor-pointer transition-all duration-500">
                        <img src={img?.image} className="object-cover w-full rounded-lg h-full duration-700 ease-in-out group-hover:scale-105" alt="" />
                        <div className="absolute inset-0 group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-cyan-400 group-hover:opacity-75"></div>
                        <IcView className="absolute inset-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                      </div>
                    </li>
                  );
                })
                : (<li>
                  img kosong
                </li>)
            }
          </ul>
        </div>
        <div className="flex justify-end text-gray-700 mt-10">
          <div className="h-10 w-10 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-6 h-6">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div className="flex h-10 font-medium rounded-full bg-gray-200">
            <div className="w-10 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">1</div>
            <div className="w-10 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">2</div>
            <div className="w-10 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">3</div>
            <div className="w-10 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">...</div>
            <div className="w-10 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">13</div>
            <div className="w-10 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">14</div>
            <div className="w-10 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">15</div>
            <div className="w-10 h-10 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">2</div>
          </div>
          <div className="h-10 w-10 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </Content>
    </Transitions>
  );
};
