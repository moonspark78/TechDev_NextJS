import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'
import Services from './Services/Services'
import ClientsReviews from './ClientsReviews/ClientsReviews'

const Home = () => {
  return (
    <div className='pt-16 pb-16 bg-[#f7f6fb] overflow-hidden'>
      <Hero/>
      <About/>
      <Feature/>
      <Services/>
      <ClientsReviews/>
    </div>
  )
}

export default Home