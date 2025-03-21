
import React from 'react'
import { workexperience } from '../data'
import {BriefcaseIcon} from "@heroicons/react/24/solid";

export default function WorkExperience() {
    return (
        <section id='workexperience'>
            <div className='container px-5 py-10 mx-auto text-center'>
                <BriefcaseIcon className='w-10 m-4 inline-block' />
                <h1 className='md:text-4xl text-3xl text-white font-medium title-font mb-12'>Work Experiences</h1>
            </div>
            <div className='flex flex-wrap -m-4'>
                {workexperience.map((workexperience,index)=>
                    <div key={workexperience.id || index} className='lg:w-1/2 w-full p-4'>
                        <div className='border-4 border-gray-500 hover:border-gray-700 p-3 w-full h-full'>
                            <div className='flex flex-row p-2 items-center mb-1' >

                                <img alt='logo' src={require(`${workexperience.image}`)} className='w-10 h-10 lg:w-15 lg:h-15 opacity-100 hover:opacity-80 m-2'/>
                                <h1 className='text-white lg:text-3xl text-2xl text-center align-text-bottom ml-3'>{workexperience.company}</h1>
                                <h2 className="font-thin text-xs text-center align-text-bottom ml-1">( {workexperience.duration} )</h2>
                            </div>

                            <div>
                                <h2 className="tracking-widest text-lg title-font font-semibold text-blue-700 mb-4 text-center">
                                                {workexperience.designation}
                                </h2>

                                {Array.isArray(workexperience.description) ? (
                                    <ul className="list-disc list-inside leading-6 text-white">
                                        {workexperience.description.map((item, index) => (
                                            <li key={index} className="mb-1">{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="leading-6">{workexperience.description}</p>
                                )}

                            </div>
                        </div>

                    </div>
                
                )}
            </div>
        </section>
    )
}
