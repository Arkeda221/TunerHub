const Home = (props) => {
  return (
    <div className="main">
      <div className="title">
        <h1>Car Posts</h1>
      </div>
      <div className="cars">
        {props.cars.map((post, index) => (
          <div key={index}>
            <div className="infowrap">
              <img src={post.image} alt={post.name} />

              <h3>{post.make}</h3>
              <h3>{post.model}</h3>
              <h3>{post.owner}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
