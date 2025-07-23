import express from 'express'
import usersController from '../controllers/users.Controller.js'
import { isAuth } from '../middlewares/Auth.js'
const router = express.Router()


router.get('/fetchUserById',isAuth(),usersController.fetchUserByIdController)
router.patch('/updateUser',isAuth(),usersController.updateUserController)

export default router