import {React,useEffect,useState} from 'react'
import {ChevronDoubleUpIcon} from "@heroicons/react/24/solid";
// import {FaArrowUp} from "react-icons/fa";

export default function Scroll() {
    const [showButton,setShowButton]=useState(false);
    const toggleVisibility = () => {
        if (window.scrollY >= 300) {
            setShowButton(true);
        }else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    useEffect(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    });

    return (
        <div className='items-end'>
            {showButton && (
                <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5  bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all"
                aria-label="Scroll to top">
                    <ChevronDoubleUpIcon className="w-5 h-5 animate-bounce" />
                </button>
            )}
          {/*{showButton && <ChevronDoubleUpIcon className='w-10  m-4 animate-bounce' onClick={scrollToTop}/> }*/}
        </div>
    )
}
