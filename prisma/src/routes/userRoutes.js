import { Router } from 'express'
import { UserController } from '../controllers/userController.js'
import { authenticateToken } from '../middleware/authMiddleware.js'

const router = Router()

// Rotas públicas
router.post('/login', UserController.login)
router.post('/', UserController.createUser)

// Rotas protegidas
router.use(authenticateToken)
router.get('/', UserController.getUsers)
router.get('/:id', UserController.getUserById)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

// Exemplo de rota protegida
router.get('/private/teste', (req, res) => {
  res.json({ message: 'Acesso autorizado!', user: req.user })
})

export default router 