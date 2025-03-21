
import React from "react";
// import { SocialIcon } from "react-social-icons";
import { projects } from "../data";
import {CodeBracketIcon} from "@heroicons/react/24/solid";

export default function Projects(){
    return(
        <section id="projects" className="text-grey-400 bg-grey-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Developed 😇 
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    “The craft of programming is the factoring of a set of requirements into a set of functions and data structures.”
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project)=>
                        <div key={project.image} className="lg:w-1/2 w-full p-4">
                            <div className="border-4 border-gray-400 hover:border-gray-600 w-full h-full">
                                <div className=" flex flex-col mb-4 mt-2">
                                    <h1  className="title-font text-lg font-medium text-white uppercase">
                                        {project.title}
                                    </h1>
                                    <h2 className="font-thin text-xs ">
                                        ( {project.timeline} )
                                    </h2>
                                </div>
                                    <p className="text-clip overflow-hidden ">

                                        <span className="tracking-tightest text-sm title-font font-medium text-green-500 mb-2 text-center">
                                            {project.techStack} 
                                        </span>
                                    </p>
                                <p className="leading-relaxed indent-6 m-5 text-start">{project.description}</p>

                                <div className="flex flex-row m-5 items-center">
                                    {/*<SocialIcon network='github' url='https://github.com/subhankar-biswas-dot' bgColor='white' className='pl-5 mx-3 opacity-80 hover:opacity-100 hover:animate-pulse ' /> */}
                                    {/*<SocialIcon label="our portfolio" className="pl-5 mx-1 opacity-80 hover:opacity-100 hover:animate-pulse"/>*/}
                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
        </section>
    )
}