import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import {React,useState} from "react";


export function Form(){
    const [values,setValues]=useState({
        name:'',email:'',description:''
    });
    const set= (name)=>{
        return({target:{value}})=>{
            setValues(oldValues=>({...oldValues,[name]:value}))
        }
    }
    const saveFormData = async()=>{
        const response = await fetch("https://protected-sands-02585.herokuapp.com/post",{
            method:"POST",
            headers:{"Content-Type":"application/json","Accept":"application/json"},
            body: JSON.stringify(values)
        });
        if(response.status!==200){
            throw new Error( `Request not valid : ${response.status}`)
        }
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            await saveFormData();
            alert("Message sent successfully!");
            setValues({
                name:'',email:'',description:''
            })
        }
        catch(e){
            alert( `Delivery Falied ${e.message}`)
        }
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
                    <form name='contact' onSubmit={handleSubmit} className="border-4 border-blue-600 flex flex-col md:m-25 md:p-25 p-5 mt-8 hover:border-blue-800 rounded m-9">
                        <div className=" mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={set('name')}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input
                                type="email" id="email" name="email"  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={values.email} onChange={set('email')}/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="leading-7 text-sm text-gray-400" >Message For Me</label>
                            <textarea id="description" name="description" value={values.description} onChange={set('description')} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-6 resize-none transition-colors duration-200 ease-in-out" />
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