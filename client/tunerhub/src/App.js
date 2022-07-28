import './styles/App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Comments from './components/Comments'
import CarDetails from './pages/CarDetails'

function App() {
  const [cars, setCars] = useState([])
  const initialState = {
    image: '',
    make: '',
    model: '',
    owner: ''
  }

  const [formState, setFormState] = useState(initialState)

  // Get All Cars
  useEffect(() => {
    const getCars = async () => {
      const res = await axios.get('http://localhost:3001/api/cars')
      setCars(res.data)
    }
    getCars()
  }, [])

  //Create New Car
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/api/cars', formState)
    setFormState(initialState)
    navigate('/')
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home cars={cars} />} />
          <Route
            path="/createpost"
            element={
              <CreatePost
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route path="/comments/:id" element={<Comments />} />
          <Route path="/cars/:id" element={<CarDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
