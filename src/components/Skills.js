
import React from "react";
import { skills } from "../data";
import {CpuChipIcon, PencilIcon} from "@heroicons/react/24/solid";
export function Skills(){
    return (
        <section id="skills">

            <div className="container mx-auto px-5 py-5">
                <div className="text-center mb-20 mt-5">
                    <CpuChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills & Technology
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {skills.map((skill)=>
                    
                        <div key={skill.name} className="p-2 sm:w-1/3 w-full">
                            <div className="bg-gray-800 rounded flex-streach  p-4 h-full items-center opacity-100 hover:opacity-70">
                                <PencilIcon className="text-green-400 w-6 h-6 inline-flex mr-4 text-center" />
                                <span className="title-font font-medium text-white ">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    
                    )}
                    
                </div>
            </div>

        </section>
    )
}