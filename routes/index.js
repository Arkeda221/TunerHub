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
router.get('/comments/:id', commentControllers.getCommentById)
router.post('/comments', commentControllers.createComment)
router.put('/comments/:id', commentControllers.updateComment)
router.delete('/comments/:id', commentControllers.deleteComment)

module.exports = router
