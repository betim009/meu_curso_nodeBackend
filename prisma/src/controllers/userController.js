import { UserService } from '../services/userService.js'
import jwt from 'jsonwebtoken'

export const UserController = {
  async getUsers(req, res) {
    try {
      const users = await UserService.getAllUsers()
      res.json(users)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' })
    }
  },
  async getUserById(req, res) {
    try {
      const id = Number(req.params.id)
      const user = await UserService.getUserById(id)
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado' })
      res.json(user)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário' })
    }
  },
  async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body)
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' })
    }
  },
  async updateUser(req, res) {
    try {
      const id = Number(req.params.id)
      const user = await UserService.updateUser(id, req.body)
      res.json(user)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário' })
    }
  },
  async deleteUser(req, res) {
    try {
      const id = Number(req.params.id)
      await UserService.deleteUser(id)
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar usuário' })
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body
      const user = await UserService.login(email, password)
      if (!user) return res.status(401).json({ error: 'Credenciais inválidas' })
      // Gerar JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        'secreta123', // Troque por uma variável de ambiente em produção
        { expiresIn: '1h' }
      )
      res.json({ message: 'Login bem-sucedido', token })
    } catch (error) {
      res.status(500).json({ error: 'Erro ao fazer login' })
    }
  },
} 