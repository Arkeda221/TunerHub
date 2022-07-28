import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = (props) => {
  let navigate = useNavigate()

  const showCar = async (id) => {
    let res = await axios.get(`http://localhost:3001/api/cars/${id}`)
    navigate(`/cars/${id}`)
  }

  return (
    <div className="main">
      <div className="title">
        <h1>Car Posts</h1>
      </div>
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
