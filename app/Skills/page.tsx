import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

const Skill = () => {
  return (
    <>
     <h2 className='text-center text-5xl font-bold bg-cyan-950 text-white p-4'><span className='text-cyan-500'>My</span> Skills</h2>
      <div className='flex bg-cyan-950 gap-5 items-center justify-center flex-wrap py-5 px-5'>
        <div className='h-[300px] w-[300px] bg-cyan-500 rounded-lg flex items-center flex-col pt-7 gap-5 hover:scale-105 transition-[1s] hover:bg-cyan-600 hover:text-white cursor-pointer'>
          <FaHtml5 size={120}/>
          <h2 className='font-black text-3xl'>Html</h2>
          <div className='border-4 border-cyan-200 rounded-full  px-10 py-1'>
            <h2 className='text-2xl font-bold '>100%</h2>
          </div>
        </div>
        <div className='h-[300px] w-[300px] bg-cyan-500 rounded-lg flex items-center flex-col pt-7 gap-5 hover:scale-105 transition-[1s] hover:bg-cyan-600 hover:text-white cursor-pointer'>
        <IoLogoCss3 size={120}/>
        <h2 className='font-black text-3xl'>CSS</h2>
        <div className='border-4 border-cyan-200 rounded-full  px-10 py-1'>
          <h2 className='text-2xl font-bold '>100%</h2>
        </div>
        </div>
        <div className='h-[300px] w-[300px] bg-cyan-500 rounded-lg flex items-center flex-col pt-7 gap-5 hover:scale-105 transition-[1s] hover:bg-cyan-600 hover:text-white cursor-pointer'>

        <IoLogoJavascript size={120}/>
        <h2 className='font-black text-3xl'>JavaScript</h2>
        <div className='border-4 border-cyan-200 rounded-full  px-10 py-1'>
          <h2 className='text-2xl font-bold '>100%</h2>
        </div>
        </div>
        <div className='h-[300px] w-[300px] bg-cyan-500 rounded-lg flex items-center flex-col pt-7 gap-5 hover:scale-105 transition-[1s] hover:bg-cyan-600 hover:text-white cursor-pointer'>
        <RiNextjsFill size={120}/>
        <h2 className='font-black text-3xl'>NextJS</h2>
        <div className='border-4 border-cyan-200 rounded-full  px-10 py-1'>
          <h2 className='text-2xl font-bold '>100%</h2>
        </div>

        </div>
    </div>
    </>
  )
}

export default Skill