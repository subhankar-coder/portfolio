import {CodeIcon} from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects(){
    return(
        <section id="projects" className="text-grey-400 bg-grey-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
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

                                        <h2 className="tracking-tightest text-sm title-font font-medium text-green-500 mb-2 text-center">
                                            {project.techStack} 
                                        </h2>
                                    </p>
                                <p className="leading-relaxed indent-6 m-5 text-start">{project.description}</p>
                            </div>
                            {/* <div className="flex relative">
                                <img alt={project.image} className="absolute inset-0 w-full h-full object-cover object-center" src={require(`${project.image}`)}/>
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.techStack}
                                    </h2>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div> */}
                        </div>
                        
                    )}
                </div>
            </div>
        </section>
    )
}