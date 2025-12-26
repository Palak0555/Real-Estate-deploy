import React, { useState } from 'react'

const SearchCard = () => {
  const [activeTab, setActiveTab] = useState('BUY')
  const tabs = ['BUY', 'RENT', 'COMMERCIAL', 'PG / CO-LIVING', 'PLOTS']
  
  return (
    <div className="mt-6 bg-white rounded-xl shadow-2xl max-w-5xl w-full">

    
      <div className="flex gap-4 sm:gap-8 px-4 sm:px-6 pt-4 sm:pt-5 text-xs sm:text-sm font-medium text-[#0078DB] overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap pb-2 cursor-pointer transition-colors ${
              activeTab === tab 
                ? 'border-b-2 border-[#0078DB] text-[#0078DB]' 
                : 'hover:text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="border-t mt-3"></div>

      
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center px-4 sm:px-6 py-4 sm:py-5 gap-3 sm:gap-4">
        <input
          type="text"
          placeholder="Search locality, project..."
          className="flex-1 text-gray-700 outline-none text-sm px-3 py-2 sm:px-0 sm:py-0 border sm:border-0 rounded-lg sm:rounded-none focus:border-[#0078DB]"
        />

        <button className="bg-[#0078DB] text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-[#0066c0] transition-colors whitespace-nowrap">
          Search
        </button>
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
 export default SearchCard