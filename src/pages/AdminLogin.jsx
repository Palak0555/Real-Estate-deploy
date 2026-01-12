import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const ADMIN_PASSWORD = 'livmetro@555'

  const handleLogin = (e) => {
    e.preventDefault()
    
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuth', 'true')
      navigate('/admin/dashboard')
    } else {
      setError('Invalid password')
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        
        {/* Logo/Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0078DB] rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">LivMetro Admin</h1>
          <p className="text-gray-600">Enter password to access admin panel</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#0078DB] focus:outline-none transition-colors"
                placeholder="Enter password"
                required
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0078DB] to-[#1F4FD8] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Login to Admin Panel
            </button>
          </form>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-[#0078DB] transition-colors text-sm font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin