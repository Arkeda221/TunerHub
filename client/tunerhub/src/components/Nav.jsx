import {Link} from 'react-router-dom'

const Nav = () => {
  return(
    <header>
      <nav>
        <Link to="/"><button> Home </button></Link>
        <Link to="/about"><button> About </button></Link>
        <Link to="/createPost"><button> Create Post </button></Link>
        </nav>
    </header>
  )
}

export default Nav