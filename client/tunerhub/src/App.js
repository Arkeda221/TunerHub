import './styles/App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <routes>
          <Route path="/" element={<Home cars={cars} />}></Route>
          <Route path="/about" element={<About />}></Route>
        </routes>
      </main>
    </div>
  )
}

export default App
