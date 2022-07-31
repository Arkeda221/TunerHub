const CreatePost = (props) => {
  return (
    <div className="create-post-page">
      <h1>Add a new Post</h1>
      <form className="create-form" onSubmit={props.handleSubmit}>
        <input
          className="create-input"
          id="image"
          type="text"
          value={props.image}
          onChange={props.handleChange}
          name={'img'}
          placeholder={'Image Link'}
        />
        <input
          className="create-input"
          id="make"
          type="text"
          value={props.make}
          onChange={props.handleChange}
          name={'make'}
          placeholder={'Make'}
        />
        <input
          className="create-input"
          id="model"
          type="text"
          value={props.model}
          onChange={props.handleChange}
          name={'model'}
          placeholder={'Model'}
        />
        <input
          className="create-input"
          id="owner"
          type="text"
          value={props.owner}
          onChange={props.handleChange}
          name={'owner'}
          placeholder={'Owner'}
        />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default CreatePost
