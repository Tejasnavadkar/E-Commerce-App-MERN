import express from 'express'
import brandsController from '../controllers/brands.Controller.js'
import { isAuth } from '../middlewares/Auth.js'
import passport from 'passport'

const router = express.Router()


router.get('/fetchBrands',isAuth(),brandsController.fetchBrands)
router.post('/createBrand',isAuth(),brandsController.createBrands)


export default router