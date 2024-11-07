import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'


const page = () => {
  return (
    <>
    <section className='bg-cyan-950'>

    <Hero/>
    <Services/>
    <Projects/>
    <Skill/>
    <Contact/>

    </section>
    
    </>
  )
}

export default page