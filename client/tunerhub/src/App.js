import './styles/App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// import About from './pages/About'

function App() {
  const [cars, setCars] = useState([])
  const [comments, setComments] = useState([])
  const initialState = {
    image: '',
    make: '',
    model: '',
    owner: ''
  }
  const initialCommentState = {
    body: ''
  }

  const [commentFormState, setCommentFormState] = useState(initialCommentState)
  const [formState, setFormState] = useState(initialState)

  // Get All Cars
  useEffect(() => {
    const getCars = async () => {
      const res = await axios.get('http://localhost:3001/api/cars')
      setCars(res.data)
    }
    getCars()
  }, [])

  //Get All Comments
  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get('http://localhost:3001/api/comments')
      setComments(res.data)
    }
    getComments()
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

  //Create new Comment

  const handleCommentChange = (event) => {
    setCommentFormState({
      ...commentFormState,
      [event.target.id]: event.target.value
    })
  }

  const handleCommentSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(
      'http://localhost:3001/api/comments',
      commentFormState
    )
    setCommentFormState(initialCommentState)
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cars={cars}
                comments={comments}
                handleCommentChange={handleCommentChange}
                handleCommentSubmit={handleCommentSubmit}
              />
            }
          ></Route>
          <Route
            path="/createpost"
            element={
              <CreatePost
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          ></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
