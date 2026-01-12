import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Home, Maximize } from 'lucide-react'
import { salesData } from '../assets/assets'
import { propertyAPI } from '../services/api'
import { Link } from 'react-router-dom'

const Sales = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)
  const [loading, setLoading] = useState(true)
  const [allProperties, setAllProperties] = useState(salesData)

  // Fetch API properties on component mount
  useEffect(() => {
    fetchApiProperties()
  }, [])

  const fetchApiProperties = async () => {
    try {
      setLoading(true)
      const properties = await propertyAPI.getAllProperties()
      
      // Combine static (featured) properties with API properties
      // Featured properties first, then API properties
      const combined = [
        ...salesData.map(prop => ({ ...prop, featured: true, source: 'static' })),
        ...properties
      ]
      setAllProperties(combined)
    } catch (error) {
      console.error('Failed to fetch properties:', error)
      // Fallback to static data if API fails
      setAllProperties(salesData)
    } finally {
      setLoading(false)
    }
  }

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
      prev >= allProperties.length - cardsToShow ? prev : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentIndex(prev => (prev === 0 ? 0 : prev - 1))
  }

  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < allProperties.length - cardsToShow

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
              {loading ? (
                'Loading...'
              ) : (
                `Showing ${currentIndex + 1}–${Math.min(currentIndex + cardsToShow, allProperties.length)} of ${allProperties.length}`
              )}
            </p>
            <div className="flex gap-2">
              <button
                onClick={prevProject}
                disabled={!canGoPrev || loading}
                className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                  canGoPrev && !loading
                    ? 'border-[#0078DB] text-[#0078DB] hover:bg-[#0078DB] hover:text-white shadow-sm hover:shadow-md'
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextProject}
                disabled={!canGoNext || loading}
                className={`p-2 rounded-lg border-2 transition-all duration-300 ${
                  canGoNext && !loading
                    ? 'border-[#0078DB] text-[#0078DB] hover:bg-[#0078DB] hover:text-white shadow-sm hover:shadow-md'
                    : 'border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="overflow-hidden">
            <div className="flex gap-5">
              {[...Array(cardsToShow)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-1.5 animate-pulse"
                  style={{ width: `calc(${100 / cardsToShow}% - 1.25rem)` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md h-full border border-gray-100">
                    <div className="bg-gray-200 h-56"></div>
                    <div className="p-4 space-y-3">
                      <div className="bg-gray-200 h-6 w-3/4 rounded"></div>
                      <div className="bg-gray-200 h-4 w-full rounded"></div>
                      <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
                      <div className="bg-gray-200 h-8 w-1/3 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Properties Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex gap-5 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                }}
              >
                {allProperties.map(property => (
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
                          
                          {/* Badge - Premium or New */}
                          {property.featured ? (
                            <span className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              Premium Listing
                            </span>
                          ) : property.isNew ? (
                            <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              New Listing
                            </span>
                          ) : (
                            <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                              For Sale
                            </span>
                          )}
                          
                          {/* Placeholder overlay for API properties without images */}
                          {property.source === 'api' && property.images.length === 0 && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                              <p className="text-white text-xs font-medium">📷 More photos coming soon</p>
                            </div>
                          )}
                          
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
          </>
        )}

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