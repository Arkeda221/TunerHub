const CreatePost = (props) => {
  return (
    <div>
      <h1>Add a new Post</h1>
      <form onSubmit={props.handleSubmit}></form>
    </div>
  )
}

export default CreatePost
