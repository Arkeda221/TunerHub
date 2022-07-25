const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comments = new Schema(
  {
    body: { type: String, required: true },
    car_id: { type: Schema.Types.ObjectId, ref: 'car_id' }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Comments', Comments)
