import {Link} from 'react-router-dom'

const Nav = () => {
  return(
    <header>
          <nav>
          <h1 className='header-title'>TunerHub</h1>
        <Link to="/" className='link'><button className='nav-button'> Home </button></Link>
        <Link to="/about" className='link'><button className='nav-button'> About </button></Link>
        <Link to="/createPost" className='link'><button className='nav-button'> Create Post </button></Link>
        </nav>
    </header>
  )
}

export default Nav