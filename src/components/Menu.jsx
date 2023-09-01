import React from "react";
import MenuCard from "./MenuCard";

const Menu = () => {
     return (
          <div className="w-full h-[780px] min-h-full bg-menu-bg flex justify-center items-center">
               <div className="flex flex-col container w-11/12 h-[90%] lg:w-4/5 bg-white rounded-md relative">
                    <div className="flex flex-col items-center py-6 lg:py-10">
                         <h1 className="text-3xl lg:text-5xl font-medium">Online Menu</h1>
                         <p className="text-center text-sm text-gray-600 pt-3">Not interested in a plan? Shop our online menu and pick as many or few meals as you need.</p>
                    </div>
                    <MenuCard />
                    <div className="w-full flex items-center h-[20%] mt-[0%]">
                         <button className="flex uppercase text-white bg-orange-400 px-16 py-3 rounded-sm w-fit h-fit mx-auto">View Entire Menu</button>
                    </div>
               </div>
          </div>
     );
}

export default Menu;
