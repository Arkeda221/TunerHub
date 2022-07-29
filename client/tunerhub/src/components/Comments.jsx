import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
require('dotenv').config()

const Commments = () => {

  const initialState = {
    body: ''
  }
  const [comment, setComment] = useState([])
  const [updateComment, setUpdateComment] = useState(initialState)


  let {id} = useParams()
  let navigate = useNavigate()

  //Get all comments associated with the car post
  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(`${process.env.URL}comments/${id}`)
      setComment(res.data.comments)
      console.log(res)
    }
    getComments()
  }, [id])

  //Update Comment 
  const handleChange = (event) => {
    setUpdateComment({ ...updateComment, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
   let res = await axios.put(`${process.env.URL}comments/${id}`, updateComment)
    setUpdateComment(res.data.comments)
    navigate(-1)
  }

  //Delete Comment
  const deleteComment = async () => {
     await axios.delete(`${process.env.URL}comments/${id}`)
    navigate(-1)
  }

  return (

    <div className="Comment-Component">
      
        <h3>{comment.body}
        <button onClick={()=> deleteComment()}>delete</button>
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            id="body"
            type="text"
            value={updateComment.body}
            onChange={handleChange}
            name={'comment'}
            placeholder={'Update Comment'}
          />
           <button>update</button>
        </form>
        </div> 
        
    
    )

}

export default Commments

