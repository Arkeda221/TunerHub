import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Commments = () => {

  const [comment, setComment] = useState([])

  const [comments, setComments] = useState([])

  let {id} = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(`http://localhost:3001/api/comments/${id}`)
      setComment(res.data.comments)
      console.log(res)
    }
    getComments()
  }, [id])


  const deleteComment = async () => {
    let res = await axios.delete(`http://localhost:3001/api/comments/${id}`)
    setComments(res.data.body)
    navigate(-1)
  }

  return (
    <div className="Comment-Component">
            
            <h3>{comment.body}
            <button onClick={()=> deleteComment()}>delete</button>
                      <button>update</button></h3>
    </div>  
    )

}

export default Commments





// //  <form onSubmit={handleCommentSubmit} > 
// //                   <input
// //                     id="body"
// //                     type="text"
// //                     value={comments.body}
// //                     onChange={handleCommentChange}
// //                     name={'comment'}
// //                     placeholder={'Leave a Comment'}
// //                   /> 
// //                    <button>Comment</button>
// //                 </form >