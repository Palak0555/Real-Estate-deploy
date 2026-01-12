import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Admin = () => {
  const navigate = useNavigate()
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)
  
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    type: '2BHK',
    size: '',
    description: '',
    category: 'Sale',
    floor: '',
    demand: '',
    lending: ''
  })

  // Check if user is authenticated
  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth')
    if (!isAuth) {
      navigate('/admin/login')
    } else {
      fetchProperties()
    }
  }, [navigate])

  const fetchProperties = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:5000/api/properties')
      setProperties(response.data)
    } catch (error) {
      console.error('Error fetching properties:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const dataToSend = {
        ...formData,
        price: Number(formData.price),
        demand: formData.demand ? Number(formData.demand) : null,
        lending: formData.lending ? Number(formData.lending) : null
      }

      if (editingProperty) {
        // Update existing property
        await axios.put(`http://localhost:5000/api/properties/${editingProperty._id}`, dataToSend)
        alert('Property updated successfully!')
      } else {
        // Add new property
        await axios.post('http://localhost:5000/api/properties', dataToSend)
        alert('Property added successfully!')
      }

      // Reset form
      setFormData({
        title: '',
        location: '',
        price: '',
        type: '2BHK',
        size: '',
        description: '',
        category: 'Sale',
        floor: '',
        demand: '',
        lending: ''
      })
      setShowForm(false)
      setEditingProperty(null)
      fetchProperties()
    } catch (error) {
      console.error('Error saving property:', error)
      alert('Failed to save property')
    }
  }

  const handleEdit = (property) => {
    setEditingProperty(property)
    setFormData({
      title: property.title,
      location: property.location,
      price: property.price.toString(),
      type: property.type || '2BHK',
      size: property.size || '',
      description: property.description || '',
      category: property.category || 'Sale',
      floor: property.floor || '',
      demand: property.demand ? property.demand.toString() : '',
      lending: property.lending ? property.lending.toString() : ''
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await axios.delete(`http://localhost:5000/api/properties/${id}`)
        alert('Property deleted successfully!')
        fetchProperties()
      } catch (error) {
        console.error('Error deleting property:', error)
        alert('Failed to delete property')
      }
    }
  }

  const formatPrice = (price) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} Lac`
    return `₹${price.toLocaleString('en-IN')}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">LivMetro Admin Panel</h1>
              <p className="text-sm text-gray-600 mt-1">{properties.length} properties in database</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-gray-600 hover:text-[#0078DB] transition-colors font-medium"
              >
                View Website
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Add Property Button */}
        <div className="mb-6">
          <button
            onClick={() => {
              setShowForm(!showForm)
              setEditingProperty(null)
              setFormData({
                title: '',
                location: '',
                price: '',
                type: '2BHK',
                size: '',
                description: '',
                category: 'Sale',
                floor: '',
                demand: '',
                lending: ''
              })
            }}
            className="inline-flex items-center gap-2 bg-[#0078DB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066c0] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {showForm ? 'Cancel' : 'Add New Property'}
          </button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">
              {editingProperty ? 'Edit Property' : 'Add New Property'}
            </h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price (₹) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                  required
                >
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                >
                  <option value="1BHK">1BHK</option>
                  <option value="2BHK">2BHK</option>
                  <option value="3BHK">3BHK</option>
                  <option value="4BHK">4BHK</option>
                  <option value="5BHK">5BHK</option>
                  <option value="Villa">Villa</option>
                  <option value="Plot">Plot</option>
                  <option value="Studio">Studio</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Size</label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  placeholder="e.g., 1200 sq.ft"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Floor</label>
                <input
                  type="text"
                  name="floor"
                  value={formData.floor}
                  onChange={handleInputChange}
                  placeholder="e.g., 5th Floor"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Demand Price (₹)</label>
                <input
                  type="number"
                  name="demand"
                  value={formData.demand}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Lending Amount (₹)</label>
                <input
                  type="number"
                  name="lending"
                  value={formData.lending}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none"
                  placeholder="Enter property description..."
                />
              </div>

              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0078DB] text-white rounded-lg font-semibold hover:bg-[#0066c0] transition-colors"
                >
                  {editingProperty ? 'Update Property' : 'Add Property'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setEditingProperty(null)
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Properties List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold">All Properties</h2>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0078DB] mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading properties...</p>
            </div>
          ) : properties.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">No properties found. Add your first property!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {properties.map((property) => (
                    <tr key={property._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{property.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{property.location}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{property.type}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          property.category === 'Sale' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {property.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#0078DB]">
                        {formatPrice(property.price)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(property)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-xs font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(property._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-xs font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin