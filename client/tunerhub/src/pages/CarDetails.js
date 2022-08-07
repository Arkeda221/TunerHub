import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { BASE_URL } from './globals'
// require('dotenv').config()

const CarDetails = () => {
  const [car, setCar] = useState('')

  const [comments, setComments] = useState([])
  const initialCommentState = {
    body: '',
    car_id: ''
  }

  const [commentFormState, setCommentFormState] = useState(initialCommentState)

  let { id } = useParams()
  console.log(id)
  let navigate = useNavigate()

  //Get Car by Id
  useEffect(() => {
    const getCar = async () => {
      let res = await axios.get(`http://localhost:3001/api/cars/${id}`)
      setCar(res.data.cars)
    }
    getCar()
  }, [id])

  //Get all comments associated with Car id
  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(`http://localhost:3001/api/comments`)
      setComments(res.data)
    }
    getComments()
  }, [])

  //filter
  const carComments = comments.filter((comment) => comment.car_id === id)

  const handleCommentChange = (event) => {
    setCommentFormState({
      ...commentFormState,
      [event.target.id]: event.target.value,
      car_id: id
    })
  }

  const handleCommentSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(
      `http://localhost:3001/api/comments/`,
      commentFormState
    )
    setCommentFormState(initialCommentState)
    window.location.reload()
  }

  //View Comment
  const viewComments = async (id) => {
    let res = await axios.get(`http://localhost:3001/api/comments/${id}`)
    navigate(`/comments/${id}`)
  }

  return (
    <div className="details_page">
      <div className="car-details">
        <img className="detail-image" src={car.image} alt={car.name} />
        <h3>Make: {car.make}</h3>
        <h3>Model: {car.model}</h3>
        <h3>Owner: {car.owner}</h3>
        <div className="comments-form">
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <input
              id="body"
              type="text"
              value={comments.body}
              onChange={handleCommentChange}
              name={'comment'}
              placeholder={'Leave a Comment : Ex. "nice car! -@alex"'}
            />
            <button className="commment-button">Comment</button>
          </form>
        </div>
        <h3>Comments:</h3>
        <div className="comment-body">
          {carComments.map((comment, index) => (
            <div key={index}>
              <div className="comments">
                <h3 className="comment">
                  {comment.body}
                  <button
                    className="Edit-button"
                    onClick={() => viewComments(comment._id)}
                  >
                    Edit
                  </button>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarDetails
