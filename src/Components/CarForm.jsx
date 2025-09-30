import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCar, changeCost, changeName } from '../Store'

function CarForm() {
    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })

    const dispatch = useDispatch()

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value))
    }

    const handleCostChange = (e) => {
        const carCost = parseInt(e.target.value) || 0
        dispatch(changeCost(carCost))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCar({name, cost}))
        dispatch(changeCost(0))
        dispatch(changeName(''))
    }

  return (
<div className="max-w-md mx-auto mt-6 p-6 border border-gray-200 rounded-xl shadow-md bg-white">
  <h4 className="text-xl font-semibold mb-4 text-center text-gray-800">Add Car</h4>
  <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Name</label>
      <input 
      required
        value={name}
        onChange={handleNameChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">Cost</label>
      <input 
      required
        value={cost || ''}
        onChange={handleCostChange}
        type="number"
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button 
      className="mt-2 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
    >
      Submit
    </button>
  </form>
</div>

  )
}

export default CarForm
