import express from 'express'
import categoriesController from '../controllers/categories.Controller.js'
import { isAuth } from '../middlewares/Auth.js'

const router = express.Router()


router.get('/fetchCategories',isAuth(),categoriesController.fetchCategories)
router.post('/createCategories',isAuth(),categoriesController.createCategory)


export default router