
import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='bg-cyan-950'>
   
        
    <h2 className='text-center text-5xl p-5 text-white font-bold'>Contact <span className='text-cyan-500'>me</span></h2>
    <form action="#" className='flex flex-col gap-5 justify-center items-center pb-5 '>
        <input className='w-64 sm:w-96 p-4 rounded-lg text-xl  placeholder:text-cyan-800' type="text" placeholder='Name'/>
        <input className='w-64 sm:w-96 p-4 rounded-lg text-xl  placeholder:text-cyan-800' type="email" placeholder='Email'/>
        <textarea className='w-64 sm:w-96 p-4 rounded-lg text-xl  placeholder:text-cyan-800' placeholder='Enter Your Message Here'></textarea>
        <button className='bg-cyan-500 w-64 sm:w-96 p-2 rounded-md text-xl font-semibold hover:bg-cyan-600 hover:text-white'>Send</button>
    </form>
    </div>
    </>
  )
}

export default Contact;