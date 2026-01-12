import axios from 'axios'
import { assets } from '../assets/assets'

const API_BASE_URL = 'http://localhost:5000/api'

// Format price from number to Indian currency format
export const formatPrice = (price) => {
  if (!price) return 'Contact for Price'
  
  const numPrice = parseInt(price)
  
  if (numPrice >= 10000000) {
    return `₹${(numPrice / 10000000).toFixed(2)} Cr`
  } else if (numPrice >= 100000) {
    return `₹${(numPrice / 100000).toFixed(2)} Lac`
  } else if (numPrice >= 1000) {
    return `₹${(numPrice / 1000).toFixed(2)} K`
  }
  return `₹${numPrice.toLocaleString('en-IN')}`
}

// Map API property to website format
export const mapApiPropertyToWebsite = (apiProperty) => {
  return {
    id: apiProperty._id,
    title: apiProperty.title || 'Property in ' + apiProperty.location,
    price: formatPrice(apiProperty.price),
    location: apiProperty.location || 'Greater Noida',
    type: apiProperty.type || null,
    size: apiProperty.size || null,
    floor: apiProperty.floor || null,
    description: apiProperty.description || 'Contact us for more details about this property',
    address: apiProperty.address || apiProperty.location,
    thumbnail: apiProperty.thumbnail || assets.project_img_2, // Placeholder
    images: apiProperty.images || [],
    videos: apiProperty.videos || [],
    demand: apiProperty.demand ? formatPrice(apiProperty.demand) : null,
    lending: apiProperty.lending ? formatPrice(apiProperty.lending) : null,
    featured: false, // API properties are not featured
    source: 'api', // Mark as API property
    isNew: true, // Mark as new listing
    createdAt: apiProperty.createdAt
  }
}

// Property API Service
export const propertyAPI = {
  // Get all properties
  getAllProperties: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/properties`)
      return response.data.map(mapApiPropertyToWebsite)
    } catch (error) {
      console.error('Error fetching properties:', error)
      return []
    }
  },

  // Get single property by ID
  getPropertyById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/properties/${id}`)
      return mapApiPropertyToWebsite(response.data)
    } catch (error) {
      console.error('Error fetching property:', error)
      return null
    }
  },

  // Add new property (for admin use)
  addProperty: async (propertyData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/properties`, propertyData)
      return {
        success: true,
        data: mapApiPropertyToWebsite(response.data)
      }
    } catch (error) {
      console.error('Error adding property:', error)
      return {
        success: false,
        error: error.message
      }
    }
  }
}

export default propertyAPI