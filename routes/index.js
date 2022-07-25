const { Router } = require('express')
const router = Router()
const carControllers = require('../controllers/CarController')
const commentControllers = require('../controllers/CommentController')

router.get('/', (req, res) => res.send('This is the root'))

//Car Routes
router.get('/cars', carControllers.getAllCars)
router.get('/cars/:id', carControllers.getCarById)
router.post('/cars', carControllers.createCar)

//Comment Routes
router.get('/comments', commentControllers.getAllComments)
router.create('/comments', commnetControllers.createComment)
router.put('/comments', commnetControllers.updateComment)
router.delete('/comments', commentControllers.deleteComment)

module.exports = router
