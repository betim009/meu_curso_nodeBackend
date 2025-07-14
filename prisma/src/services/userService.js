import { UserModel } from '../models/userModel.js'

export const UserService = {
  async getAllUsers() {
    // Aqui pode adicionar lógica de negócio, validações, etc
    return UserModel.findAll()
  },
  async getUserById(id) {
    return UserModel.findById(id)
  },
  async createUser(data) {
    return UserModel.create(data)
  },
  async updateUser(id, data) {
    return UserModel.update(id, data)
  },
  async deleteUser(id) {
    return UserModel.delete(id)
  },
  async login(email, password) {
    const user = await UserModel.findByEmail(email)
    if (!user || user.password !== password) {
      return null
    }
    return user
  },
  // Adicione mais métodos conforme necessário
} 