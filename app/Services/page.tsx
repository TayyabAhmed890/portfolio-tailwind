import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <>
      <h2 className='text-center text-5xl font-bold bg-cyan-950 text-white p-4'><span className='text-cyan-500'>Our</span> Services</h2>
      <div className='flex bg-cyan-950 gap-5 items-center justify-center flex-wrap py-5 px-5'>
        <div className='h-56 w-[500px] bg-cyan-500 rounded-lg p-5 flex flex-col gap-3'>
          <Image className='' src="/code.png" alt="" height={50} width={50} />
          <h2 className='text-3xl font-black'>Web Development</h2>
          <p className='text-xl'>We Offer full Stack and Responsive Websites Projects Services</p>
        </div>
        <div className='h-56 w-[500px] bg-cyan-500 rounded-lg p-5 flex flex-col gap-3'>
          <Image className='' src="/ux.png" alt="" height={50} width={50} />
          <h2 className='text-3xl font-black'>UX/UI Designing</h2>
        <p className='text-xl'>We Offer Attractive and Modern User Interface Services</p>
        </div>
        <div className='h-56 w-[500px] bg-cyan-500 rounded-lg p-5 flex flex-col gap-3'>
          <Image className='' src="/pen.png" alt="" height={50} width={50} />
          <h2 className='text-3xl font-black'>Graphic Designing</h2>
          <p className='text-xl'>We Offer Creative Visuals with the help of Designing Services</p>
        </div>
        <div className='h-56 w-[500px] bg-cyan-500 rounded-lg p-5 flex flex-col gap-3'>
          <Image className='' src="/video.png" alt="" height={50} width={50} />
          <h2 className='text-3xl font-black'>Video Editing</h2>
          <p className='text-xl'>We Offer Production Level Video Editing Services</p>
        </div>
      </div>
    </>
  )
}

export default Services