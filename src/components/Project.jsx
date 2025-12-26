import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Home, Maximize } from 'lucide-react'
import { projectsData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) setCardsToShow(4)
      else if (window.innerWidth >= 1024) setCardsToShow(3)
      else if (window.innerWidth >= 768) setCardsToShow(2)
      else setCardsToShow(1)
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  const nextProject = () => {
    setCurrentIndex((prev) => 
      prev >= projectsData.length - cardsToShow ? 0 : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, projectsData.length - cardsToShow) : prev - 1
    )
  }

  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < projectsData.length - cardsToShow

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Featured <span className="text-[#0078DB]">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-[#0078DB] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover premium residential projects in Greater Noida with world-class amenities
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500 font-medium">
            Showing {currentIndex + 1}–{Math.min(currentIndex + cardsToShow, projectsData.length)} of {projectsData.length}
          </p>
          <div className="flex gap-2.5">
            <button 
              onClick={prevProject}
              disabled={!canGoPrev}
              className={`p-2.5 rounded-lg border-2 transition-all duration-300 ${
                canGoPrev 
                  ? 'border-[#0078DB] text-[#0078DB] hover:bg-[#0078DB] hover:text-white shadow-sm hover:shadow-md' 
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextProject}
              disabled={!canGoNext}
              className={`p-2.5 rounded-lg border-2 transition-all duration-300 ${
                canGoNext 
                  ? 'border-[#0078DB] text-[#0078DB] hover:bg-[#0078DB] hover:text-white shadow-sm hover:shadow-md' 
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * (100 / cardsToShow))}%)`
            }}
          >
            {projectsData.map((project) => (
              <div 
                key={project.id} 
                className="flex-shrink-0 px-1.5"
                style={{ width: `calc(${100 / cardsToShow}% - 1.25rem)` }}
              >
                <Link to={`/project/${project.id}`} className="block h-full">
                  <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full border border-gray-100 hover:border-[#0078DB]">
                  
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <span className="absolute top-3 right-3 bg-[#0078DB] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                        Featured
                      </span>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white text-[#0078DB] px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:bg-[#0078DB] hover:text-white transition-all duration-300">
                          View Details
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#0078DB] transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <div className="space-y-2 mb-3.5">
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin size={15} className="text-[#0078DB] mr-2 flex-shrink-0" />
                          <span className="truncate">{project.location}</span>
                        </div>
                        {project.type && (
                          <div className="flex items-center text-gray-600 text-sm">
                            <Home size={15} className="text-[#0078DB] mr-2 flex-shrink-0" />
                            <span>{project.type}</span>
                          </div>
                        )}
                        {project.size && (
                          <div className="flex items-center text-gray-600 text-sm">
                            <Maximize size={15} className="text-[#0078DB] mr-2 flex-shrink-0" />
                            <span>{project.size}</span>
                          </div>
                        )}
                      </div>

                      
                      <div className="pt-3.5 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-500 mb-0.5">Starting from</p>
                            <p className="text-[#0078DB] text-lg font-bold">
                              {project.price.split('-')[0].trim()}
                            </p>
                          </div>
                          <button 
                            onClick={(e) => {
                              e.preventDefault()
                              console.log('Enquiry for:', project.title)
                            }}
                            className="text-[#0078DB] hover:text-white hover:bg-[#0078DB] border-2 border-[#0078DB] rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300"
                          >
                            Enquire
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

       
        <div className="text-center mt-10">
          <Link to="/projects">
            <button className="bg-[#0078DB] text-white px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-[#0066c0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View All Projects →
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Project