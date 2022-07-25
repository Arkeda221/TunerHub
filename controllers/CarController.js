const Cars = require('../models/cars')

const getAllCars = async (req, res) => {
  try {
    const cars = await Cars.find()
    return res.status(200).json(cars)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllCars
}
