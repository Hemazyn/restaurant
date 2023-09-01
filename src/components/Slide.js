import { testimony } from "../constants";

// Function to create the testimonial slider
function createTestimonialSlider(testimonyData) {
     const sliderContainer = document.querySelector(".slider");
     testimonyData.forEach((testimonial) => {
          const testimonialItem = document.createElement("div");
          testimonialItem.classList.add("slider-item");
          testimonialItem.innerHTML = `
      <p>${testimonial.text}</p>
      <span>${testimonial.name}</span>
    `;
          sliderContainer.appendChild(testimonialItem);
     });
}

// Call the function to create the testimonial slider using the provided data
createTestimonialSlider(testimony);
