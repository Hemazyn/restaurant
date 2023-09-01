import React from "react";
import { steps } from "../constants";

const Steps = () => {
     return (
          <div className="w-full h-fit text-gray-900">
               <h1 className="text-center text-2xl lg:text-5xl font-medium py-5 lg:py-20">How It Works</h1>
               <div className="grid grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto mb-3 lg:mb-20 md:mb-10">
                    {/* <div className="flex flex-col lg:flex-row w-4/5 mx-auto mb-10 md:mb-20"> */}
                    {steps.map(({ id, head, text, src }) => (
                         <div key={id} className="flex flex-col items-center justify-center w-4/5 mx-auto mb-4 cursor-pointer rounded-md capitalize font-medium hover:scale-90 px-3 duration-200 shadow" >
                              <img src={src} alt={head} className="w-3/5 lg:w-2/4 h-1/5 lg:h-1/2" />
                              <h3 className="uppercase mt-3">{head}</h3>
                              <p className="font-normal text-gray-500 mt-2 text-center text-xs">{text}</p>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default Steps;