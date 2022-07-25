const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/CarController')

router.get('/', (req, res) => res.send('This is the root'))

router.get('/cars', controllers.getAllCars)
router.get('/cars/:id', controllers.getCarById)

module.exports = router
