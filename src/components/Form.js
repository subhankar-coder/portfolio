import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import React from "react";

export function Form(){
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [message,setMessage]=React.useState("");

    function encode(data){
        return Object.keys(data).map(
            (key)=> encodeURIComponent(key)+"="+encodeURIComponent(data[key])
        ).join("&")
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch("/",{
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body: encode({"form-name":"contact", name,email,message})
        }).then(()=>alert("Message sent successfully!")).catch((error)=>alert(error))
    }
    return(
        <section id='hire'>
            <div className="mx-auto container p-5">
                <div className="text-center mb-10 mt-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-10 text-white">Hire Me 🤝</h1>
                </div>
                <div className=" items-center p-10 flex flex-col" >
                    <div className="text-center m-15 ">

                    <h1 className="sm:text-2xl text-1xl font-light  text-green-400 text-center bg-gray-700  rounded px-6 py-2">
                            Plz Submit the Form Below
                    </h1>
                    <ChevronDoubleDownIcon className="text-red w-10 inline-block m-2 animate-bounce" />
                    </div>
                    <form name='contact' onSubmit={handleSubmit} netlify className="border-4 border-blue-700 flex flex-col md:m-15 md:p-20 p-5 mt-8">
                        <div className=" mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e)=>setName(e.target.name)}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input
                                type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.email)} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message For Me</label>
                            <textarea id="message" name="message" onChange={(e)=>setMessage(e.target.message)} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-6 resize-none transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="text-white rounded bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 cursor-wait">
                                Submit
                            </button>

                        </div>
                        
                    </form>
                </div>
            </div>
        </section>

    )
}