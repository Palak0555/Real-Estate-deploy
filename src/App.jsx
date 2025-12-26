import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/Header'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import Sales from './components/Sales'

import ProjectDetails from './pages/ProjectDetails'
import SalesDetails from './pages/SalesDetails'


const Home = () => {
  return (
    <>
      <Header />
      <About />
      <WhyChoose />
      <Project />
      <Sales />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full overflow-hidden">
        <Routes>

         
          <Route path="/" element={<Home />} />

          
          <Route path="/project/:id" element={<ProjectDetails />} />

          
          <Route path="/sale/:id" element={<SalesDetails />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
