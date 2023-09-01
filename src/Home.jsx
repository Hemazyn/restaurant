import React from "react";

const Home = () => {
     return (
          <div className="w-full h-fit">
               <div className="bg-home-bg h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-center" >
                    <div className="w-full h-3/5 md:h-3/4 py-2 px-10 md:w-4/5 lg:h-3/4 lg:w-2/3 flex flex-col justify-center items-start rounded-lg text-white bg-opacity-60 backdrop-filter backdrop-blur-md z-0">
                         <h1 className=" text-2xl md:text-4xl lg:text-7xl">Get Started <br /> With a Healthier You</h1>
                         <p className="mt-2 font-medium">We make eating healthy convenient and delicious so you can have more time to do the things you love.</p>
                         <div className="bg-orange-400 uppercase font-medium px-6 py-3 mt-3 rounded-sm cursor-pointer">Get Started</div>
                    </div>
               </div >
          </div>
     );
}

export default Home;
