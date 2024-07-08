import React, { useState } from 'react' ;
import '../../pages/Contact/Contact.css' ;

const ContactForm = () => {

    const [name , setName] = useState('') ;
    const [email , setEmail] = useState('') ;
    const [number , setNumber] = useState('') ;
    const [message, setMessage] = useState('') ;

    const [formData,setFormData] = useState({
        name : '' ,
        email : '' ,
        number : '' ,
        message : '' ,
    })

    const handleSubmit = () => {
        setFormData({name,email,number,message}) ;
        console.log(formData);
    }


  return (
    <div className="contact-form w-3/4 lg:w-[50vw] mx-auto py-5 bg-gray-200 rounded-lg ">
        <div>
            <h1 className='text-slate-700 text-[16px] md:text-[2rem] font-semibold tracking-wide text-center'>Get a consultation by an Expert</h1>
        </div>
        <div className='my-5 flex justify-center items-center'>
            <form action="submit" className='flex flex-col gap-y-5 w-full justify-center items-center' onSubmit={handleSubmit}>
                <label htmlFor="clientName" className='w-5/6 sm:w-2/3'>
                    <p className='text-[14px] md:text-[1.2rem] font-semibold text-gray-600 cursor-pointer p-1'>Name</p>
                    <input id='clientName' type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} className='p-2 text-[14px] md:text-[1.1rem] w-full border-[1px] border-gray-400 rounded-md' />
                </label>
                <label htmlFor="clientEmail" className='w-5/6 sm:w-2/3'>
                    <p className='text-[14px] md:text-[1.2rem] font-semibold text-gray-600 cursor-pointer p-1'>Email</p>
                    <input id='clientEmail' type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='p-2 text-[14px] md:text-[1.1rem] w-full border-[1px] border-gray-400 rounded-md' />
                </label>
                <label htmlFor="clientNumber" className='w-5/6 sm:w-2/3'>
                    <p className='text-[14px] md:text-[1.2rem] font-semibold text-gray-600 cursor-pointer p-1'>Phone Number</p>
                    <input id='clientNumber' type='number' name='number' value={number} onChange={(e)=>setNumber(e.target.value)} className='p-2 text-[14px] md:text-[1.1rem] w-full border-[1px] border-gray-400 rounded-md' />
                </label>
                <label htmlFor="clientMessage" className='w-5/6 sm:w-2/3'>
                    <p className='text-[14px] md:text-[1.2rem] font-semibold text-gray-600 cursor-pointer p-1'>Message</p>
                    <textarea rows={5} cols={30} id='clientMessage' type='text' name='message' value={message} onChange={(e)=>setMessage(e.target.value)} className='p-2 text-[14px] md:text-[1.1rem] w-full border-[1px] border-gray-400 rounded-md' />
                </label>

                <button type='submit' className='px-3 py-2 text-[16px] text-white font-semibold tracking-wide bg-gray-900 w-1/4 rounded-md '><p className='hover-underline-animation'>Submit</p></button>
            </form>
        </div>

    </div>
  )
}

export default ContactForm ;