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
import AdminLogin from './pages/AdminLogin'
import Admin from './pages/Admin'


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

          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Project Details */}
          <Route path="/project/:id" element={<ProjectDetails />} />

          {/* Sale Details */}
          <Route path="/sale/:id" element={<SalesDetails />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Admin />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App