import { BookOpenIcon } from '@heroicons/react/solid'
import React from 'react'
import { education } from '../data'


export default function Education() {
    return (
        <section id="education">
            <div className='container px-5 py-10 mx-auto text-center'>
                <BookOpenIcon className='w-10 m-4 inline-block ' />
                <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-12'>EDUCATION</h1>
            </div>
            <div className='flex flex-wrap -m-4'>
                {education.map((education)=>

                    <div className='lg:w-1/2 w-full p-4'>
                        <div className='flex flex-col p-5 mt-2 mb-3 border-4 items-center border-gray-400 hover:border-gray-700'>
                            <div className='w-full h-full'>

                                <h1 className='lg:text-3xl text-1.5xl text-center font-semibold mb-1 text-gray-300'>{education.name}</h1>
                            </div>
                            <div className='text-xs font-thing items-center'>
                                ( {education.year} )
                            </div>
                            <div className='mt-2 mb-4'>
                                <h2 className='text-sm lg:text-lg text-center text-white'><b className='text-green-600'>Degree: </b> {education.highestDegree}</h2>
                            </div>
                            <div className='mb-3 items-start'>
                                <h3 className='text-sm lg:text-base text-left text-white'><b className='text-green-600'>CGPA/Percentage: </b> {education.percentage}</h3>
                            </div>
                            <div>
                                <p className='leading-relaxed text-center text-white'>
                                    {education.remarks}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
            
        
    )
}
