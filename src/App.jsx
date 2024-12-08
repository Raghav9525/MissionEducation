import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact'
import MyNavbar from './components/MyNavbar'
import HeroSection from './components/HeroSection';
import Course from './components/Course';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <MyNavbar />

      <Routes>
  
      <Route path="/mynavbar" element={<MyNavbar />} />

      <Route path="/" element={<HeroSection />} />

    
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />

        


  
      </Routes>

    </Router>
  )
}

export default App
