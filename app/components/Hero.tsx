import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <div className='bg-cyan-950 w-auto h-[400px] flex items-center text-white sm:justify-center md:justify-between mx-6'>
        <div className=' sm:text-center md:text-left '>
          <h2 className='text-4xl sm:4xl md:text-5xl lg:6xl xl:7xl font-sans font-black'>Tayyab Ahmed</h2>
          <h2 className='text-4xl sm:4xl md:text-5xl lg:6xl xl:7xl font-sans font-black'>Frontend <span className='text-cyan-500'>Web Developer</span> </h2>
          <button className='bg-cyan-500 py-3 px-6 rounded-lg my-2 font-semibold text-black'><Link href="/cv updated.pdf" target='_blank'>My Resume</Link></button>
        </div>
        <div className='w-auto h-auto md:block hidden mr-5'>
          <Image src="/web-development.png" alt="" height={320} width={320}/>
        </div>
        </div>
    </>
  )
}

export default Hero