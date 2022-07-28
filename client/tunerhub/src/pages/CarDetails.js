import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CarDetails = () => {
  const [car, setCar] = useState('')

  const [comments, setComments] = useState([])
  const initialCommentState = {
    body: '',
    car_id: ''
  }

  const [commentFormState, setCommentFormState] = useState(initialCommentState)

  let { id } = useParams()

  useEffect(() => {
    const getCar = async () => {
      let res = await axios.get(`http://localhost:3001/api/cars/${id}`)
      setCar(res.data.cars)
    }
    getCar()
  }, [])

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

  return (
    <div className="car-post">
      <div className="car-details">
        <img src={car.image} alt={car.name} />
        <h3>Make: {car.make}</h3>
        <h3>Model: {car.model}</h3>
        <h3>Owner: {car.owner}</h3>
      </div>
      <div className="comments-form">
        <form onSubmit={handleCommentSubmit}>
          <input
            id="body"
            type="text"
            value={comments.body}
            onChange={handleCommentChange}
            name={'comment'}
            placeholder={'Leave a Comment'}
          />
          <button>Comment</button>
        </form>
      </div>
      <div className="comment-body">
        {comments.map((comment, index) => (
          <div key={index}>
            <div className="comments">
              <h3>{comment.body}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarDetails
