import express from 'express'
import brandsController from '../controllers/brands.Controller.js'

const router = express.Router()


router.get('/fetchBrands',brandsController.fetchBrands)
router.post('/createBrand',brandsController.createBrands)


export default router