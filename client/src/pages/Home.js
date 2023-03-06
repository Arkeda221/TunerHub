import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
// require('dotenv').config()

const Home = (props) => {
  let navigate = useNavigate()

  const showCar = async (id) => {
    await axios.get(`${BASE_URL}cars/${id}`)
    navigate(`/cars/${id}`)
  }

  return (
    <div className="home_page">
      <div className="title"></div>
      <div className="cars">
        {props.cars.map((post) => (
          <div
            className="car-card"
            onClick={() => showCar(post._id)}
            key={post.id}
          >
            <img src={post.image} alt={post.name} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
