import { Router } from 'express'
import { UserController } from '../controllers/userController.js'

const router = Router()

router.get('/', UserController.getUsers)
router.get('/:id', UserController.getUserById)
router.post('/', UserController.createUser)
router.post('/login', UserController.login)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

export default router 