import React from "react";
export default function About(){
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello 👋 From Subhankar
                    </h1>
                    <h2 className="tracking-widest text-lg title-font font-medium text-blue-500 mb-1">A Computer Science 🖥️ Enthusiast .</h2>
                    <br className="hidden lg:inline-block" /> 
                    
                    <p className="mb-8 mt-2" align="left" >
                    I'm a final year under grad student 🎓. Passionate about various fields of computer science 💻 and engineering.Including full stack web development, machine learning, deep learning, artificial intelligence, devops, cloud,bigdata analytics to name a few...... 
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Egar to Work with Me!
                        </a>

                        <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">
                            My previous works 👨‍💼
                        </a>
                    </div>
                    
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={require('./images.png')}/>
                </div>
            </div>
        </section>
    )
}