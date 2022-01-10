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
            <div className='bg-gray-900 flex flex-row pb-10 px-16 rounded shadow-md '>
                <div className='border-4 border-white-600 grow p-5 opacity-100 hover:opacity-70 mx-10'>
                    <h2 className='title-font font-semibold text-green-400 tracking-widest text-lg'>
                        ADDRESS 🏠
                    </h2>
                    <p className='mt-1 mx-auto'>
                        SUBHANKAR BISWAS <br />
                        RAJARHAT BISHNUPUR GHOSHPARA,<br />
                        DISTRICT-24 PGS(N),<br />
                        WEST BENGAL,INDIA <br/>
                        PIN-700135
                    </p>

                </div>
                
                <div className='border-4 border-white-600 grow p-5 opacity-100 hover:opacity-70'>
                    <h2 className='title-font font-semibold text-green-400 text-lg'>
                        EMAIL & PHONE 📬
                    </h2>
                    <p className='mt-1'>
                        <PhoneIcon className='mx-auto inline-block w-10 mb-4' />  +91-6289369640 <br />
                        <MailIcon className='mx-auto inline-block w-10 mb-4' />  coder.subhankar@gmail.com <br />
                        <span className='flex flex-wraper' >

                            <SocialIcon network='linkedin' url='https://www.linkedin.com/in/subhankar-biswas-7a3bb01a0/' className='pr-5 py-5 opacity-80 hover:opacity-100 hover:animate-spin'fgColor='blue' bgColor='white'/>  
                            <SocialIcon network='github' url='https://github.com/subhankar-biswas-dot' bgColor='white' className='pl-5 mx-3 opacity-80 hover:opacity-100 hover:animate-spin' /> 
                            <SocialIcon network='twitter' url='https://twitter.com/Subhank72276383' fgColor='white' className='pr-5 opacity-80 hover:opacity-100 hover:animate-spin'/>
                        </span>

                    </p>
                </div>
            </div>
        </section>
    )
}