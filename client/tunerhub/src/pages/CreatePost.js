const CreatePost = (props) => {
  return (
    <div>
      <h1>Add a new Post</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          id="image"
          type="text"
          value={props.image}
          onChange={props.handleChange}
          name={'img'}
          placeholder={'image link'}
        />
        <input
          id="make"
          type="text"
          value={props.make}
          onChange={props.handleChange}
          name={'make'}
          placeholder={'make'}
        />
        <input
          id="model"
          type="text"
          value={props.model}
          onChange={props.handleChange}
          name={'model'}
          placeholder={'model'}
        />
        <input
          id="owner"
          type="text"
          value={props.owner}
          onChange={props.handleChange}
          name={'owner'}
          placeholder={'owner'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost
