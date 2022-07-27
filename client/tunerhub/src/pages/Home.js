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

            //   <div className="infowrap">
            //     <img src={post.image} alt={post.name} />

            //     <h3>{post.make}</h3>
            //     <h3>{post.model}</h3>
            //     <h3>{post.owner}</h3>

            //     <form onSubmit={props.handleCommentSubmit}>
            //       <input
            //         id="body"
            //         type="text"
            //         value={props.body}
            //         onChange={props.handleCommentChange}
            //         name={'comment'}
            //         placeholder={'Leave a Comment'}
            //       />
            //       <button>Comment</button>
            //     </form>
            //     {props.comments.map((comment, index) => (
            //       <div key={index}>
            //         <div className="comments">
            //           <h3>{comment.body}</h3>
            //         </div>
            //       </div>
            //     ))}
            //   </div>
            // </div>
          />
        ))}
      </div>
    </div>
  )
}
export default Home
