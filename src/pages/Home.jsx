import React from 'react'
import Hero from '../components/home/Hero'
import Trending from '../components/home/Trending'
import Advertising from '../components/home/Advertising'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <>
        <Hero />
        <AboutUs />
        <Advertising />
        <Trending />
    </>
  )
}

export default Home