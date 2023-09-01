import React from "react";

const About = () => {
     return (
          <>
               <div className="w-ful h-fit bg-white v-md about-section-bg">
                    <div className="flex flex-col">
                         <div className="w-full lg:w-4/5">
                              <div className="flex flex-col bg-white p-6 border-sm shadow rounded-md">
                                   <h1 className="text-2xl sec-h1">Our mission is to make clean eating delicious and convenient for everyone.</h1>
                                   <p className="text-gray-600 mt-3 lg:mt-6 sec-p">Our mission is to make clean eating simple and convenient. You should never have to sacrifice quality, flavor or nutrition when it comes to your, which is why we offer the highest quality ingredients in our meals. Every meal we prepare is created with passion and care by our incredible chef and culinary team. We are more passionate than ever that we can truly change people’s lives with clean eating!</p>
                                   <div className="w-fit bg-orange-400 text-white uppercase font-medium px-6 py-3 mt-4 lg:mt-8 rounded-sm cursor-pointer">Learn More</div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="w-ful h-fit bg-white v-md started-bg mb-10">
                    <div className="flex flex-col">
                         <div className="w-full lg:w-4/5" style={{ marginLeft: "auto" }}>
                              <div className="flex flex-col bg-white p-6 border-sm shadow rounded-md">
                                   <h1 className="text-2xl sec-h1">Get Started With a Healthier You</h1>
                                   <p className="text-gray-600 mt-3 lg:mt-6 sec-p">The convenience of a well prepared, healthy, flavorful meal with no shopping, preparing, or clean up is a total game changer for your lifestyle!</p>
                                   <div className="w-fit bg-orange-400 text-white uppercase font-medium px-6 py-3 mt-4 lg:mt-8 rounded-sm cursor-pointer">Sign Up Now</div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     );
}

export default About;