import React, { useRef, useEffect } from 'react';

const TestimonialSlider = ({ testimonies }) => {
     const sliderRef = useRef(null);

     useEffect(() => {
          // Function to scroll to the next slide
          const scrollToNextSlide = () => {
               if (sliderRef.current) {
                    const slideWidth = sliderRef.current.children[0].offsetWidth;
                    sliderRef.current.scrollLeft += slideWidth;
               }
          };
          // Set the interval for automatic scrolling (5 seconds in this example)
          const interval = setInterval(scrollToNextSlide, 5000); // Change the duration as needed
          // Clear the interval when the component is unmounted to prevent memory leaks
          return () => clearInterval(interval);
     }, []);

     return (
          <div className="w-4/5 lg:w-3/5 h-fit mx-auto overflow-y-scroll relative">
               <div className="flex transition-all" ref={sliderRef}>
                    {testimonies.map((testimonial) => (
                         <div key={testimonial.id} className="slider-item">
                              <p className="text-gray-600 leading-7 mb-5 lg:mb-10">
                                   {testimonial.text}
                              </p>
                              <span className="font-bold text-1xl lg:text-2xl">
                                   {testimonial.name}
                              </span>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default TestimonialSlider;
