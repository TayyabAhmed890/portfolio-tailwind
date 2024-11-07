import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='h-auto w-auto p-5 text-center bg-cyan-500 text-white font-semibold flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-4'>
        <Link href="https://www.linkedin.com/in/tayyab-ahmed-a83700246/" target='_blank'><Image src="/linkedin.png" alt="" height={50} width={50}/></Link>
        <Link href="https://github.com/TayyabAhmed890" target='_blank'><Image src="/github.png" alt="" height={50} width={50}/>  </Link>
      </div>
        <h2 className='text-black'>All Rights Reserved Copyright&copy; | Portfolio</h2>
    </div>
    </>
  )
}

export default Footer