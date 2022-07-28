import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CarDetails = (props) => {
  const [car, setCar] = useState('')

  let { id } = useParams()

  useEffect(() => {
    const getCar = async () => {
      let res = await axios.get(`http://localhost:3001/api/cars/${id}`)
      console.log(res.data)
      setCar(res.data)
    }
    getCar()
  }, [props.cars, id])

  return (
    <div className="car-details">
      <img src={car.image} alt={car.name} />
      <h3>{car.make}</h3>
      <h3>{car.model}</h3>
      <h3>{car.owner}</h3>
    </div>
  )
}

export default CarDetails
