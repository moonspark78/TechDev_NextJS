import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'
import Services from './Services/Services'

const Home = () => {
  return (
    <div className='pt-16 pb-16 bg-[#f7f6fb] overflow-hidden'>
      <Hero/>
      <About/>
      <Feature/>
      <Services/>
    </div>
  )
}

export default Home