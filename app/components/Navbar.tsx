"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { IoMdMenu,IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
    <nav className='flex justify-between w-100% h-auto items-center bg-cyan-500 text-white'>
      <div>
        <h2 className='text-2xl md:text-4xl font-black px-4 py-4'>Portfolio</h2>
      </div>
      <div className=' hidden sm:block px-4 py-4'>
      <ul className=' flex gap-9 font-semibold'>
        <Link href="/">Home</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Projects">Projects</Link>
        <Link href="/Skills">Skills</Link>
        <Link href="/Contact">Contact</Link>
      </ul>
      </div>
      <button className='hidden md:block px-4 py-3 bg-cyan-950 text-white rounded-lg mr-4'>
        <Link href="https://github.com/TayyabAhmed890" target='_blank'>Visit Github</Link>
      </button>
      <div className='sm:hidden pr-4 text-white' onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose size={30}/>:
        <IoMdMenu size={30} />
        }
      </div>
      {
        isMenuOpen && (
          <ul className='flex flex-col gap-3 w-full h-auto top-16  bg-white text-cyan-700 sm:hidden absolute '>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/">Home</Link>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/Services">Services</Link>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/Projects">Projects</Link>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/Skills">Skills</Link>
        <Link className='hover:bg-cyan-700 hover:text-white py-4 px-4' href="/Contact">Contact</Link>
          </ul>
        )
      }
    </nav>
    </>
  )
}

export default Navbar