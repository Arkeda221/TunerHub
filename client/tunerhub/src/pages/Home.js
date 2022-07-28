import Cars from '../components/Cars'
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
            <h3>{post.make}</h3>
            <h3>{post.model}</h3>
            <h3>{post.owner}</h3>
            <h3>Comments</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
