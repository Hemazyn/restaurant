import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineShopping } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import navbarLogo from "./assets/navbarLogo.png"

const Navbar = () => {
     const [nav, setNav] = useState(false);
     const links = [
          {
               id: 1,
               link: "Grap & Go",
          },
          {
               id: 2,
               link: "Blog",
          },
          {
               id: 3,
               link: <AiOutlineShopping style={{ fontSize: "22px" }} />,
          },
          {
               id: 4,
               link: "Sign Up",
          },
          {
               id: 5,
               link: "Login",
          },
     ];
     return (
          <div className="w-full flex justify-between items-center px-12 py-1" >
               <div className="hidden lg:block">
                    <div className="flex items-center gap-x-2">
                         <h4 className="text-sm font-medium hover:text-orange-400 duration-200 cursor-pointer">Current Menu</h4>
                         <div className="flex items-center text-white  bg-orange-300 px-4 py-2 cursor-pointer rounded-sm">
                              <h5 className="text-sm font-medium">Shop</h5>
                              <span className="text-3xl"> <RiArrowDropDownLine /> </span>
                         </div>
                    </div>
               </div>
               <div className="flex">
                    <img src={navbarLogo} alt="navbarLogo" className="w-20 cursor-pointer" />
               </div>
               <ul className="hidden md:flex lg:flex">
                    {links.map(({ id, link }) => (
                         <li key={id} className="px-4 cursor-pointer capitalize font-medium hover:text-orange-400 duration-200" >
                              <Link to={link} smooth duration={500}>{link}</Link>
                         </li>
                    ))}
               </ul>
               <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 md:hidden">
                    {nav ? <FaTimes size={25} className="font-thin " style={{ fontWeight: "lighter" }} /> : <FaBars size={25} style={{ fontWeight: "lighter" }} className="font-thin" />}
               </div>
               {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-2/4 h-screen text-gray-500 bg-gradient-to-b from-white to-gray-500 z-40">
                         {links.map(({ id, link }) => (
                              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-2xl">
                                   <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                              </li>
                         ))}
                    </ul>
               )}
          </div >
     );
}

export default Navbar;