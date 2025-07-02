import express from 'express'
import categoriesController from '../controllers/categories.Controller.js'

const router = express.Router()


router.get('/fetchCategories',categoriesController.fetchCategories)
router.post('/createCategories',categoriesController.createCategory)


export default router