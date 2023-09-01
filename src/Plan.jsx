import React from "react";

const Plan = () => {
     const plans = [
          {
               id: 1,
               title: "The Lifestyle Plan",
               price: "$9.76",
          }, {
               id: 2,
               title: "The Low Carb Plan",
               price: "$11.19",
          }, {
               id: 3,
               title: "The Pescatarian Plan",
               price: "$11.19",
          }, {
               id: 4,
               title: "The Vegan Plan",
               price: "$11.19",
          }, {
               id: 5,
               title: "The Vegetarian Plan",
               price: "$11.19",
          },
     ]
     return (
          <div className="bg-white h-3/4 pb-16">
               <div className="flex flex-col items-center py-6 lg:py-16 w-4/5 mx-auto">
                    <h1 className="text-3xl lg:text-5xl font-medium">Plans for Everyone</h1>
                    <p className="text-center text-sm text-gray-600 pt-3">Consistency in your diet starts with a plan. Choose from 2, 3, or 4 meals per day for 5, 6, or 7 days. <br />
                         Plans are subscription based but can be changed at any time to meet your needs.</p>
               </div>
               <div className="flex flex-col md:flex-row-2 lg:flex-row w-4/5 md:w-3/4 mx-auto gap-y-6 gap-x-6">
                    {plans.map(({ id, title, price }) => (
                         <div key={id} className="flex flex-col justify-center items-center w-full lg:w-1/5 py-10 shadow rounded-md ">
                              <h4 className="font-medium font-sans text-gray-800 mb-2">{title}</h4>
                              <p className="font-light text-gray-700 mb-2">as low as</p>
                              <h5 className="font-normal text-gray-500 text-2xl">{price} <span>per meal</span></h5>
                              <button className=" text-white uppercase bg-orange-500 rounded-sm w-4/5 py-2 mt-7 cursor-pointer">choose</button>
                         </div>
                    ))}
               </div>
          </div>
     );
}
export default Plan;