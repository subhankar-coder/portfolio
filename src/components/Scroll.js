import { ChevronDoubleUpIcon } from '@heroicons/react/solid'
import {React,useEffect,useState} from 'react'

export default function Scroll() {
    const [showButton,setShowButton]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(!showButton &&  window.pageYOffset > 50)
                setShowButton(true);
            else if(showButton && window.pageYOffset<50)
                setShowButton(false);
        })
    },[]);

    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behaviour:"smooth"
        })
    };
    return (
        <div className='items-end'>
          {showButton && <ChevronDoubleUpIcon className='w-10  m-4 animate-bounce' onClick={scrollToTop}/> } 
        </div>
    )
}
