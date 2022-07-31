import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// require('dotenv').config()

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
      const res = await axios.get(`http://localhost:3001/api/comments/${id}`)
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
   let res = await axios.put(`http://localhost:3001/api/comments/${id}`, updateComment)
    setUpdateComment(res.data.comments)
    window.location.reload()
  }

  //Delete Comment
  const deleteComment = async () => {
     await axios.delete(`http://localhost:3001/api/comments/${id}`)
    navigate(-1)
  }

  return (

    <div className="Comment-Component">
        <h2>Modify Your Comment Below:</h2>
        <h3>{comment.body}
        <button className='delete-button' onClick={()=> deleteComment()}>delete</button>
        </h3>
        <form className='update-form' onSubmit={handleSubmit}>
          <input
            id="body"
            type="text"
            value={updateComment.body}
            onChange={handleChange}
            name={'comment'}
            placeholder={'Update Comment'}
          />
           <button className='update-button'>update</button>
        </form>
         <button className='back-button' onClick={()=> navigate(-1)}>back</button>
        </div> 
        
    
    )

}

export default Commments

