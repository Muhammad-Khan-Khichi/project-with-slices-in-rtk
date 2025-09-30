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
    <div>
        <h3>My Cars</h3>
        <label>Search</label>
        <input
        value={searchTerm}
        onChange={handleSearchTermChange}
        />
    </div>
  )
}

export default CarSearch
