import Cars from '../components/Cars'

const Home = (props) => {
  return (
    <div className="main">
      <div className="title">
        <h1>Car Posts</h1>
      </div>
      <div className="cars">
        {props.cars.map((post, id) => (
          <Cars
            key={id}
            image={post.image}
            make={post.make}
            model={post.model}
            owner={post.owner}
          />
        ))}
        <div></div>
      </div>
    </div>
  )
}
export default Home
