const Cars = require('../models/cars')

const getAllCars = async (req, res) => {
  try {
    const cars = await Cars.find()
    return res.status(200).json(cars)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getCarById = async (req, res) => {
  try {
    const { id } = req.params
    const cars = await Cars.findById(id)
    if (cars) {
      return res.status(200).json({ cars })
    }
    return res
      .status(404)
      .send('Try a different Input. The one you have tried does not exist.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllCars,
  getCarById
}
