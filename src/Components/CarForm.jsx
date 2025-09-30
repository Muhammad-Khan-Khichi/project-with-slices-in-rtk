import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../Store'

function CarForm() {
    const name = useSelector((state) => {
        return state.form.name
    })
    const dispatch = useDispatch()
    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value))
    }

  return (
    <div>
      <h4>Add Car</h4>
      <form>
        <label>Name</label>
        <input 
        value={name}
        onChange={handleNameChange}
        />
      </form>
    </div>
  )
}

export default CarForm
