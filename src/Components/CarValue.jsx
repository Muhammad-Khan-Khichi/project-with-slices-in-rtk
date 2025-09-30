import React from 'react'
import { useSelector } from 'react-redux'

function CarValue() {
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        }); 

        return filteredCars.reduce((acc, car) => {
            return acc + car.cost
        }, 0)
    })
  return (
<div className="max-w-md mx-auto mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm text-center">
  <p className="text-lg font-semibold text-gray-700">
    Total Cost: <span className="text-blue-600 font-bold">${totalCost}</span>
  </p>
</div>

  )
}

export default CarValue
