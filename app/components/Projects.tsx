import React from 'react'
import Link from 'next/link';

const Projects = () => {
  return (
    <>
   <h2 className='text-center text-5xl font-bold bg-cyan-950 text-white p-4'><span className='text-cyan-500'>My</span> Projects</h2>
         <div className='Projects flex bg-cyan-950 gap-5 items-center justify-center flex-wrap py-5 px-5'>
        <div className='h-[300px] w-[300px] bg-cyan-500 rounded-lg flex flex-col items-center justify-center gap-5 hover:bg-cyan-600 hover:text-white cursor-pointer hover:scale-105 transition-[1s]'>
          <h2 className='text-5xl font-black'>Project 1</h2>
          <Link  className='text-xl font-semibold' href="https://fabricon-clothes.vercel.app/" target='_blank'>Fabricon Clothes</Link>
        </div>
        <div className='h-[300px] w-[300px] bg-cyan-500 rounded-lg flex flex-col items-center justify-center gap-5 hover:bg-cyan-600 hover:text-white cursor-pointer hover:scale-105 transition-[1s]'>
          <h2 className='text-5xl font-black'>Project 2</h2>
          <Link  className='text-xl font-semibold'href="https://figma-css-seven.vercel.app/" target='_blank'>Figma Site</Link>
        </div>
        <div className='h-[300px] w-[300px] bg-cyan-500 rounded-lg flex flex-col items-center justify-center gap-5 hover:bg-cyan-600 hover:text-white cursor-pointer hover:scale-105 transition-[1s]'>
          <h2 className='text-5xl font-black'>Project 3</h2>
          <Link  className='text-xl font-semibold' href="https://milestone-final-resume-builder.vercel.app/" target='_blank'>Resume Builder</Link>
        </div>
        <div className='h-[300px] w-[300px] bg-cyan-500 rounded-lg flex flex-col items-center justify-center gap-5 hover:bg-cyan-600 hover:text-white cursor-pointer hover:scale-105 transition-[1s]'>
          <h2 className='text-5xl font-black'>Project 4</h2>
          <Link  className='text-xl font-semibold' href="https://github.com/TayyabAhmed890/Node_Project00_Cli_Calculator_Typescript" target='_blank'>CLI Calculator</Link>
        </div>
    </div>
    </>
  )
}

export default Projects; 