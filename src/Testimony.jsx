import React from 'react';
import Slider from './components/Slider';
import { testimony } from './constants';

const Testimony = () => {
     return (
          <div className="w-full h-fit bg-orange-100 pb-10 lg:pb-28">
               <div className="flex flex-col items-center py-5 lg:py-12">
                    <h1 className="text-3xl lg:text-5xl font-medium">What people are saying</h1>
               </div>
               <Slider testimonies={testimony} />
          </div>
     );
}

export default Testimony;
