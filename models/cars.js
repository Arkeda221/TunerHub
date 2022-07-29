const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Car = new Schema(
  {
    image: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    owner: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Car', Car)
