import React from 'react' ;
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import './Contact.css' ;

const ContactCard = ({contactData,index}) => {

    const {type ,subheading, contact , message} = contactData ;
    const handleAnimation = () => {
        const animatedBtn = document.querySelectorAll('.animated-btn') ;
        animatedBtn[index].classList.remove('hidden') ;
        animatedBtn[index].classList.add('inline-block') ;
    }

    const handleRecover = () => {
        const animatedBtn = document.querySelectorAll('.animated-btn') ;
        animatedBtn[index].classList.remove('inline-block') ;
        animatedBtn[index].classList.add('hidden') ;
    }
 
    return (
    <div className='flex flex-col items-center bg-gray-200 p-4 py-6 rounded-md md:min-h-[200px] md:min-w-[300px] justify-center gap-y-5 border-[1px] border-gray-300 hover:scale-105 transition-all duration-200 ease-in-out'>
        <div className='rounded-full hover:bg-gray-900 hover:px-4 hover:py-3 hover:text-white transition-all duration-900 ease-in-out flex items-center justify-center hover:gap-x-5 cursor-pointer' onMouseOver={handleAnimation} onMouseOut={handleRecover}>
            {type === 'call' ? <BsFillTelephoneFill  className='md:text-[2rem]'/> : 
            (type === 'email' ? <MdEmail  className='md:text-[2rem]'/> : <FaLocationDot className='md:text-[2rem]'/>)  }
            <button className='animated-btn hidden transition-all duration-300 ease-in-out text-white'>
                <p className='hover-underline-animation'>{message}</p>
            </button>
        </div>
        <div className='md:text-[2rem] text-slate-700 font-bold tracking-wide'>{type.charAt(0).toUpperCase() + type.slice(1)}</div>
        <div className='text-[12px] md:text-[1rem] text-slate-700 tracking-wide max-w-[300px] text-center mx-auto px-6'>{subheading}{type==='visit' ? '' : contact}</div>
        <div>
            <button className='bg-gray-900 text-white px-3 py-2 rounded-md overflow-ellipsis hover:hover-underline-animation-btn hover:scale-110 transition-all duration-200 ease-in-out'><span className='hover-underline-animation cursor-pointer font-semibold tracking-wide'>{contact}</span></button>
        </div>
    </div>
  )
}

export default ContactCard ;