import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchTerm } from '../Store'

function CarSearch() {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })

    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value))
    }
  return (
<div className="max-w-xl mx-auto mt-6 p-6 bg-white rounded-xl shadow-md">
  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">My Cars</h3>
  
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-medium text-gray-600">Search</label>
    <input
      value={searchTerm}
      onChange={handleSearchTermChange}
      placeholder="Type to filter cars..."
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>

  )
}

export default CarSearch
