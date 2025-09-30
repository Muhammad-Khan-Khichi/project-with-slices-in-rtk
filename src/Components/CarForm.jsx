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
    <div>
      <h4>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
        value={name}
        onChange={handleNameChange}
        />
        <label>Cost</label>
        <input 
        value={cost || ''}
        onChange={handleCostChange}
        type='number'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CarForm
