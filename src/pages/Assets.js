import React, { useEffect, useState } from 'react';
import { Sidebar, Content } from '../components';
import { Transitions } from '../animations';
import { getAll } from '../apis';


export const Assets = () => {
  const [image, setImage] = useState({});
  useEffect(() => {
    window.scroll(0, 0);
    getAll().then(res => setImage(res));
    return () => {

    }
  }, [])

  return (
    <Transitions>
      <Sidebar />
      <Content>
        <h1>Assets</h1>
        <div className="w-full">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-purple-500 align-middle">
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
                        <div className="overflow-hidden w-96 h-50 rounded-3xl">
                          <img className="object-cover w-full h-full" src={img.image} alt="" />
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
        </div>
      </Content>
    </Transitions>
  );
};
