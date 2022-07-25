const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/CarController')
const comments = require('../controllers/CommentController')

router.get('/', (req, res) => res.send('This is the root'))

//Car Routes
router.get('/cars', controllers.getAllCars)
router.get('/cars/:id', controllers.getCarById)
router.post('/cars', controllers.createCar)

//Comment Routes
router.get('/comments', controllers.getAllComments)
router.create('/comments', controllers.createComment)
router.put('/comments', controllers.updateComment)
router.delete('/comments', controllers.deleteComment)

module.exports = router
