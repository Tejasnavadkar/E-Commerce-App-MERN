import express from 'express'
import authController from '../controllers/auth.Controller.js'
const router = express.Router()



router.post('/signup',authController.createUserController)
router.post('/login',authController.checkUserController)

export default router