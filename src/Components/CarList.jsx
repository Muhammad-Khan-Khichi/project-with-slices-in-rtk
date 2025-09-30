import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../Store';

function CarList() {

    const dispatch = useDispatch()

    const cars = useSelector(({ cars: {data, searchTerm} }) => {
        return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car) => {
        return(
            <div key={car.id}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                onClick={() => {
                    handleCarDelete(car)
                }}
                >Delete</button>
            </div>
        )
    })
  return (
    <div>
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList
