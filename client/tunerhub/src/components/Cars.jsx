import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Cars = (props) => {
 let { id } = useParams()
 let navigate = useNavigate()

const [comments, setComments] = useState([])
const initialCommentState = {
  body: ''
}

const [commentFormState, setCommentFormState] = useState(initialCommentState)

useEffect(() => {
  const getComments = async () => {
    const res = await axios.get('http://localhost:3001/api/comments')
   
    setComments(res.data)
  }
  getComments()
}, [])

const handleCommentChange = (event) => {
  setCommentFormState({
    ...commentFormState,
    [event.target.id]: event.target.value
  })
}

const handleCommentSubmit = async (event) => {
  event.preventDefault()
  let res = await axios.post(
    `http://localhost:3001/api/comments/`,
    commentFormState
  )
  setCommentFormState(initialCommentState)
}





const deleteComment = async () => {
  let res = await axios.delete(`http://localhost:3001/api/comments/${id}`)
  setComments(res.data.body)
  navigate('/')
}

const viewComments = async (id) => {
  let res = await axios.get(`http://localhost:3001/api/comments/${id}`)
  navigate(`/comments/${id}`)
}




  return (
   <div className="infowrap">
                <img src={props.image} alt={props.name} />

                <h3>{props.make}</h3>
                <h3>{props.model}</h3>
                <h3>{props.owner}</h3>
                <form onSubmit={handleCommentSubmit} >
                  <input
                    id="body"
                    type="text"
                    value={comments.body}
                    onChange={handleCommentChange}
                    name={'comment'}
                    placeholder={'Leave a Comment'}
                  />
                  <button>Comment</button>
                </form >
                {comments.map((comment, index) => (
                  <div key={index}>
                    <div className="comments">
                      <h3>{comment.body} 
                      <button onClick={() => viewComments(comment._id)}>view</button>
                      {/* <button onClick={()=> deleteComment()}>delete</button>
                      <button>update</button> */}
                      </h3>
                    </div>
                  </div>
                ))}
                
              </div>
  )
}

export default Cars