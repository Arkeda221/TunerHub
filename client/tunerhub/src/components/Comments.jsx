const Commments = (props) => {

  return (
    <div className="nestedComment">
            
            <h3>{props.body}
            <button onClick={()=> props.deleteComment()}>delete</button>
                      <button>update</button></h3>
    </div>  
    )

}

export default Commments





//  <form onSubmit={handleCommentSubmit} > 
//                   <input
//                     id="body"
//                     type="text"
//                     value={comments.body}
//                     onChange={handleCommentChange}
//                     name={'comment'}
//                     placeholder={'Leave a Comment'}
//                   /> 
//                    <button>Comment</button>
//                 </form >