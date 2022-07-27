import './styles/App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import axios from 'axios'

// import About from './pages/About'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const getCars = async () => {
      const res = await axios.get('http://localhost:3001/api/cars')
      setCars(res.data)
    }
    getCars()
  }, [])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home cars={cars} />}></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
