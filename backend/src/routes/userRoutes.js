import express from 'express'
import usersController from '../controllers/users.Controller.js'
const router = express.Router()


router.get('/fetchUserById/:id',usersController.fetchUserByIdController)
router.patch('/updateUser/:id',usersController.updateUserController)

export default router