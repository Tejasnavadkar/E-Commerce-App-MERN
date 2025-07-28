import express from 'express'
import authController from '../controllers/auth.Controller.js'
import passport from 'passport'
import { isAuth } from '../middlewares/Auth.js'
const router = express.Router()



router.post('/signup',authController.createUserController)
router.post('/login',passport.authenticate('local'),authController.loginController)
router.get('/checkUser',isAuth(),authController.checkUserController)
router.get('/signOut',authController.signOutController)
router.post('/verifyMail',authController.verifyMailController)
export default router