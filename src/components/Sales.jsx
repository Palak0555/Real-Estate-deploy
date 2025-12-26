import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Home, Maximize } from 'lucide-react'
import { salesData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Sales = () => {
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
    setCurrentIndex(prev =>
      prev >= salesData.length - cardsToShow ? prev : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentIndex(prev => (prev === 0 ? 0 : prev - 1))
  }

  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < salesData.length - cardsToShow

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-lg md:text-xl font-semibold text-gray-500">
                Properties for <span className="text-[#0078DB] font-bold">Sale</span>
              </h2>
              <div className="h-0.5 w-12 bg-gray-300 rounded-full hidden md:block"></div>
            </div>
            <p className="text-gray-600 text-xs md:text-sm">
              Explore premium properties for sale in Greater Noida with excellent connectivity
            </p>
          </div>

         
          <div className="flex items-center gap-4">
            <p className="text-xs md:text-sm text-gray-500 font-medium whitespace-nowrap">
              Showing {currentIndex + 1}–{Math.min(currentIndex + cardsToShow, salesData.length)} of {salesData.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={prevProject}
                disabled={!canGoPrev}
                className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                  canGoPrev
                    ? 'border-[#0078DB] text-[#0078DB] hover:bg-[#0078DB] hover:text-white shadow-sm hover:shadow-md'
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextProject}
                disabled={!canGoNext}
                className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                  canGoNext
                    ? 'border-[#0078DB] text-[#0078DB] hover:bg-[#0078DB] hover:text-white shadow-sm hover:shadow-md'
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

       
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {salesData.map(property => (
              <div
                key={property.id}
                className="flex-shrink-0 px-1.5"
                style={{ width: `calc(${100 / cardsToShow}% - 1.25rem)` }}
              >
                <Link to={`/sale/${property.id}`} className="block h-full">
                  <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full border border-gray-100 hover:border-[#0078DB]">

                    
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={property.thumbnail}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                        For Sale
                      </span>
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white text-[#0078DB] px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:bg-[#0078DB] hover:text-white transition-all duration-300">
                          View Details
                        </span>
                      </div>
                    </div>

                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2.5 group-hover:text-[#0078DB] transition-colors duration-300 line-clamp-2">
                        {property.title}
                      </h3>

                      <div className="space-y-2 mb-3.5 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin size={15} className="text-[#0078DB] mr-2 flex-shrink-0" />
                          <span className="truncate">{property.location}</span>
                        </div>
                        {property.type && (
                          <div className="flex items-center">
                            <Home size={15} className="text-[#0078DB] mr-2 flex-shrink-0" />
                            <span>{property.type}</span>
                          </div>
                        )}
                        {property.size && (
                          <div className="flex items-center">
                            <Maximize size={15} className="text-[#0078DB] mr-2 flex-shrink-0" />
                            <span>{property.size}</span>
                          </div>
                        )}
                      </div>

                      <div className="border-t border-gray-100 pt-3.5 flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500 mb-0.5">Price</p>
                          <p className="text-lg font-bold text-[#0078DB]">
                            {property.price}
                          </p>
                        </div>
                        <button className="border-2 border-[#0078DB] text-[#0078DB] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0078DB] hover:text-white transition-all duration-300">
                          Enquire
                        </button>
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link to="/sale">
            <button className="bg-[#0078DB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066c0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View All Properties →
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Sales