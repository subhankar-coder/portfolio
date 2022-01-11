import {  MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { SocialIcon } from "react-social-icons";
export function Contact(){
    return(
        <section id="contact">
            <div className="container mx-auto px-5 py-5">
                <div className="text-center mb-10 mt-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Contacts <PhoneIcon className='mx-auto inline-block w-10 mb-4' />
                    </h1>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col p-4'>
                    <div className='border-4 border-white-600 grow py-8 lg:p-5 opacity-100 hover:opacity-70 lg:mx-5 '>
                        <h2 className='title-font font-semibold text-green-400 tracking-widest text-lg text-center'>
                            ADDRESS 🏠
                        </h2>
                        <p className='mt-1 mx-auto pl-4'>
                            SUBHANKAR BISWAS <br />
                            RAJARHAT BISHNUPUR GHOSHPARA,<br />
                            DISTRICT-24 PGS(N),<br />
                            WEST BENGAL,INDIA <br/>
                            PIN-700135
                        </p>

                    </div>
                    
                    <div className='border-4 border-white-600 grow pt-5 lg:p-5 opacity-100 hover:opacity-70 lg:mx-5'>
                        <h2 className='title-font font-semibold text-green-400 text-lg text-center'>
                            EMAIL & PHONE 📬
                        </h2>
                        <p className='mt-3 pl-2 pb-2'>
                            <div className='flex inline-flex'><PhoneIcon className='mx-auto w-10 mb-4' /> <span className='text-center  align-text-bottom'> +91-6289369640 </span> </div><br />
                            <div className='flex inline-flex'><MailIcon className='mx-auto w-10 mb-4 ' /> <p className='text-center align-text-bottom text-ellipsis overflow-hidden' > coder.subhankar@gmail.com</p></div> <br />
                            <span className='flex flex-wraper' >

                                <SocialIcon network='linkedin' url='https://www.linkedin.com/in/subhankar-biswas-7a3bb01a0/' className='pr-5 opacity-80 hover:opacity-100 hover:animate-spin'fgColor='blue' bgColor='white'/>  
                                <SocialIcon network='github' url='https://github.com/subhankar-biswas-dot' bgColor='white' className='pl-5 mx-3 opacity-80 hover:opacity-100 hover:animate-spin' /> 
                                <SocialIcon network='twitter' url='https://twitter.com/Subhank72276383' fgColor='white' className='pr-5 opacity-80 hover:opacity-100 hover:animate-spin'/>
                            </span>

                        </p>
                    </div>
                </div>
        </section>
    )
}