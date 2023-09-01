import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";

const Newsletter = () => {
     const [showModal, setShowModal] = useState(true);
     const closeModal = () => {
          setShowModal(false);
     };
     if (!showModal) {
          return null; // If showModal is false, return null to not render the component
     }
     return (
          <div className=" flex w-[400px] h-full shadow  px-4 py-6">
               <div className="flex-row w-full rounded-[10px]" style={{ border: "2px solid bue" }}>
                    <h2 className="text-orange-500 text-4xl font-medium mb-4">Newsletter</h2>
                    <p className="text-sm text-[#000000] font-normal mb-4">Signup for our newsletter to receive updates, new menu changes, and special offers!</p>
                    <input type="email" placeholder="Email" className="w-full p-1 block border-gray-300 outline-gray-300 outline-2 text-sm px-3 py-2 font-normal text-gray-800 mb-5" />
                    <button type="submit" className="w-full p-2 rounded bg-orange-500 text-white text-sm font-bold">Subscribe</button>
                    <p className="absolute right-0 mr-3 mt-3 top-0 cursor-pointer"><FaTimes size={25} style={{ background: "#000", color: "#fff", padding: "5px", borderRadius: "50%" }} onClick={closeModal} /></p>
               </div>
          </div>
     );
}

export default Newsletter;