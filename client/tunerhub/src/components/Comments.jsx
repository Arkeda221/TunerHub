// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// const Commments = () => {

//   const [comment, setComment] = useState([])

//   let {id} = useParams()

//   useEffect(() => {
//     const getComments = async () => {
//       const res = await axios.get(`http://localhost:3001/api/comments/${id}`)
//       setComment(res.data)
//       console.log(res.data)
//     }
//     getComments()
//   }, [id])

//   return (
//     <div className="Comment-Component">
            
//             <h3>{comment.body}
//             {/* <button onClick={()=> deleteComment()}>delete</button> */}
//                       <button>update</button></h3>
//     </div>  
//     )

// }

// export default Commments





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