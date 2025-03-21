import React from 'react';
import {EnvelopeOpenIcon, PhoneArrowUpRightIcon} from "@heroicons/react/24/outline";
import {ImGithub} from "react-icons/im";
import {FaLinkedin} from "react-icons/fa";
import {AiFillTwitterSquare} from "react-icons/ai";
import {UserIcon} from "@heroicons/react/24/solid";

export function Contact(){
    return(
        <section id="contact">
            <div className="container mx-auto px-5 py-5">
                <div className="text-center mb-10 mt-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Contacts <UserIcon className='mx-auto inline-block w-10 mb-4' />
                    </h1>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col p-4'>
                    <div className='border-4 border-white-600 grow py-5 lg:p-5 opacity-100 hover:opacity-70 lg:mx-5 '>
                        <h2 className='title-font font-semibold text-green-400 tracking-widest text-lg text-center'>
                            Social Networks 💬
                        </h2>
                        <span className='flex flex-wraper items-center justify-center pt-10' >
                            <div className="pl-5 pr-5">
                              <a
                                  href="https://github.com/subhankar-coder"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center"
                              >
                                <ImGithub className="w-10 h-10 mr-2 text-white hover:text-gray-400" />
                              </a>
                        </div>
                           <div className="flex space-x-4">
                                 {/* LinkedIn Link */}
                               <div className="pl-5 pr-5">
                                    <a
                                        href="https://www.linkedin.com/in/subhankar-biswas-7a3bb01a0/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                    >
                                      <FaLinkedin className="w-10 h-10 text-blue-600 hover:text-blue-800" />
                                    </a>
                                  </div>

                                                           {/* Twitter Link */}
                                                           <div className="pl-5 pr-5">
                                    <a
                                        href="https://twitter.com/Subhank72276383"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                    >
                                      <AiFillTwitterSquare className="w-10 h-10 text-blue-400 hover:text-blue-600" />
                                    </a>
                                  </div>
                                </div>
                        </span>

                    </div>
                    
                    <div className='border-4 border-white-600 grow pt-5 lg:p-5 opacity-100 hover:opacity-70 lg:mx-5'>
                        <h2 className='title-font font-semibold text-green-400 text-lg text-center'>
                            Email & Phone 📬
                        </h2>
                        <p className='mt-3 pl-2 pb-2'>
                            <div className='flex inline-flex'><PhoneArrowUpRightIcon className='mx-auto w-10 mb-4 text-green-400 hover:text-green-600' /> <span className='text-center  align-text-bottom'> +91-6289369640 </span> </div><br />
                            <div className='flex inline-flex'><EnvelopeOpenIcon className='mx-auto w-10 mb-4 text-white hover:text-gray-400' /> <p className='text-center align-text-bottom text-ellipsis overflow-hidden' > sub.nitt@gmail.com</p></div> <br />
                        </p>
                    </div>
                </div>
        </section>
    )
}