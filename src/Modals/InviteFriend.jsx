import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import deliver from "../assets/deliver.jpg";
import { FaTimes } from "react-icons/fa";


const InviteFriend = () => {
     const [showModal, setShowModal] = useState(true);
     const closeModal = () => {
          setShowModal(false);
     };
     if (!showModal) {
          return null; // If showModal is false, return null to not render the component
     }

     return (
          <div className="relative flex flex-row w-[800px] h-full shadow bg-white rounded-[10px]">
               <div className="w-full lg:w-2/5 lg:min-h-full rounded-lg">
                    <img src={deliver} alt="deliver" className='w-full h-full rounded-tl-lg rounded-bl-lg' />
               </div>
               <div className="flex flex-col w-full lg:w-3/5 p-6">
                    <div className="flex justify-evenly pr-10 mb-8">
                         <p className="w-4/5 font-medium text-3xl text-gray-600">Invite your Friends and get $20.00</p>
                         <div className="flex-col">
                              <p className="h-fit text-center font-bold text-4xl text-gray-600">0</p>
                              <p className="text-xs font-light">friends</p>
                         </div>
                         <p className="absolute right-0 mr-3 mt-3 top-0 cursor-pointer"><FaTimes size={25} style={{ background: "#000", color: "#fff", padding: "5px", borderRadius: "50%" }} onClick={closeModal} /></p>
                    </div>
                    <form action="" className="flex flex-col">
                         <div className="flex flex-col border-b border-gray-400 mb-4">
                              <label htmlFor="email" className="text-[10px] text-gray-400"> Your email </label>
                              <input type="text" placeholder="Your registered email" className="py-1 outline-none  placeholder:text-xs" />
                         </div>
                         <div className="flex flex-col border-b border-gray-400 mb-4">
                              <label htmlFor="password" className="text-[10px] text-gray-400"> Password </label>
                              <input type="password" className="py-1 outline-none  placeholder:text-xs" />
                         </div>
                         <div className="w-full flex flex-row justify-between">
                              <Link to="/register"><p className="text-sm text-gray-800 hover:text-orange-400">Dont have an account?</p></Link>
                              <Link to="/recovery"><p className="text-sm text-gray-800 hover:text-orange-400">Forgot password?</p></Link>
                         </div>
                         <button className="bg-orange-500 text-white text-xs py-2 mt-10 rounded-sm">Login</button>
                         <p className="text-sm text-gray-600 mt-8">* After your friend registers an account and makes their first purchase, both you and your friend will receive $20.00.. Please note, when you Refer a Friend, you are agreeing to our
                              <Link to="/recovery"><span className="text-orange-400"> Terms & Conditions</span></Link>.
                         </p>
                    </form>
               </div>
          </div>
     );
}

export default InviteFriend;