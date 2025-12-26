import React from 'react'

const SearchCard = () => {
  return (
    <div className="mt-6 bg-white rounded-xl shadow-2xl max-w-5xl">

     
      <div className="flex gap-8 px-6 pt-5 text-sm font-medium text-[#0078DB]">
        
        <span className="cursor-pointer hover:text-gray-800">BUY</span>
        <span className="cursor-pointer hover:text-gray-800">RENT</span>
        <span className="cursor-pointer hover:text-gray-800">COMMERCIAL</span>
        <span className="cursor-pointer hover:text-gray-800">PG / CO-LIVING</span>
        <span className="cursor-pointer hover:text-gray-800">PLOTS</span>
      </div>

      <div className="border-t mt-3"></div>

      
      <div className="flex items-center px-6 py-5 gap-4">
        <input
          type="text"
          placeholder="Search for locality, landmark, project, or builder"
          className="flex-1 text-gray-700 outline-none text-sm"
        />

        <button className="bg-[#0078DB] text-white px-8 py-3 rounded-lg font-medium">
          Search
        </button>
      </div>

    </div>
  )
}

export default SearchCard
