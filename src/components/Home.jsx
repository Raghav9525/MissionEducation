
import React from 'react'
import HeroSection from './HeroSection'
import Course from './Course'
import Contact from './Contact'
import About from './About'
// import { imagePath } from './Constant'
import { courses } from './Constant'
import ImageGallery from './ImageGallery'

const Home = () => {
  return (
    <div>

        <HeroSection />
        <About />
        <Course />
        <ImageGallery />
        <Contact />
    </div>
  )
}

export default Home