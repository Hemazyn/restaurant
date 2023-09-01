import React from 'react';
import { menuItems } from "../constants";

const MenuCard = () => {
     return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 rounded-md w-[98%] mx-auto h-[60%] px-6 overflow-auto shadow border-b">
               {menuItems.map(({ id, src, title, text, calQuan, premium }) => (
                    <div key={id} className="relative flex h-40 rounded-md shadow-lg mb-6">
                         <div className="w-2/5">
                              <img src={src} alt={title} className="w-full h-full rounded-tl-md rounded-bl-md" />
                         </div>
                         <div className="flex flex-col w-3/5 h-full px-1 py-1">
                              <h4 className="text-sm font-medium text-gray-900">{title}</h4>
                              <p className="font-light font-sans text-xs text-gray-800">{text}</p>
                              <p className=" absolute bottom-0 right-0 font-medium me-2">{calQuan}<span className="pl-1 font-light">Calories</span></p>
                         </div>
                         <p className="absolute top-1 text-white text-sm w-fit px-2 rounded-e-xl shadow-md bg-red-500">{premium}</p>
                    </div>
               ))}
          </div>
     );
}

export default MenuCard;