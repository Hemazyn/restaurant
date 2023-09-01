import React from 'react';
import { Link } from 'react-router-dom';
import { otherLink, socialLinks, footerLink } from './constants';
import InviteFriend from './Modals/InviteFriend';
import Newsletter from './Modals/Newsletter';


const Footer = () => {
     return (
          <div className="w-full text-white flex flex-row" style={{ backgroundColor: "#333333" }}>
               <div className="w-4/5 mx-auto mt-6 mb-5 flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                         <h4 className="text-3xl font-bold mb-5">Health First</h4>
                         <p className="font-light text-sm"><a href="tel:+203-345-5432" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">203-345-5432</a></p>
                         <p className="font-light text-sm"><a href="mailto:www.healthfirst.net" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">customerservice@healthfirst.net</a> </p>
                         <div className="flex gap-x-2 mt-10">
                              <button className="text-gray-900 text-sm bg-white font-light px-2 p-1 rounded-sm hover:animate-pulse" onClick={() => { window.sub_modal1.showModal() }}>Sign Up for our Newsletter</button>
                              {/* start modal */}
                              <dialog id="sub_modal1">
                                   <Newsletter />
                              </dialog>
                              {/* stop modal */}
                              <button className="text-gray-900 text-sm bg-white font-light px-2 p-1 rounded-sm hover:animate-pulse" onClick={() => { window.sub_modal2.showModal() }}>Invite a friend</button>
                              {/* start modal */}
                              <dialog id="sub_modal2">
                                   <InviteFriend />
                              </dialog>
                              {/* stop modal */}
                         </div>
                         <div className="flex flex-row mt-10 mb-5 gap-x-2">
                              {socialLinks.map(({ id, src, icon }) => (
                                   <button key={id} className="p-2 bg-white text-gray-950 flex justify-center items-center" style={{ borderRadius: "50%" }}>
                                        <Link to={src} target="_blank">{icon}</Link>
                                   </button>
                              ))}
                         </div>
                         <span className="text-xs font-light">© 2023 Health First. All Rights Reserved.</span>
                    </div>
                    <div className="w-full mt-3 md:w-1/2 flex flex-row">
                         <div className="w-1/2">
                              <h4 className="font-bold mb-5">Health First</h4>
                              {footerLink.map(({ id, src, text }) => (
                                   <p key={id} className="mb-1">
                                        < Link to={src}>
                                             <p className="w-fit font-normal text-sm hover:text-orange-400">{text} </p>
                                        </Link>
                                   </p>
                              ))}
                         </div>
                         <div className="w-1/2">
                              <h4 className="font-bold mb-5">Meal Ordering</h4>
                              {otherLink.map(({ id, src, text }) => (
                                   <p key={id} className="mb-1">
                                        < Link to={src}>
                                             <p className="w-fit font-normal text-sm hover:text-orange-400">{text} </p>
                                        </Link>
                                   </p>
                              ))}
                         </div>
                    </div>
               </div>
          </div >
     );
}

export default Footer;