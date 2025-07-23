import express from 'express'
import authController from '../controllers/auth.Controller.js'
import passport from 'passport'
const router = express.Router()



router.post('/signup',authController.createUserController)
router.post('/login',passport.authenticate('local'),authController.loginController)

export default router