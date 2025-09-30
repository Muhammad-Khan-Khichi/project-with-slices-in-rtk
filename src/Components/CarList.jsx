import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../Store';

function CarList() {

    const dispatch = useDispatch()

    const {cars , name} = useSelector(({ form, cars: {data, searchTerm} }) => {
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return {
            cars: filteredCars,
            name: form.name
        }
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return(
  <div 
    key={car.id} 
    className="flex items-center justify-between p-3 mb-2 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition"
  >
    <p className={`${bold ? 'font-semibold text-blue-600' : 'text-gray-800'} text-lg`}>
      {car.name} - ${car.cost}
    </p>
    <button
      onClick={() => handleCarDelete(car)}
      className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition"
    >
      Delete
    </button>
  </div>
        )
    })
  return (
  <div className="max-w-xl mx-auto mt-6 space-y-3">
    {renderedCars}
    <hr className="border-t border-gray-300 mt-4" />
  </div>
  )
}

export default CarList
