import express from 'express'
import productController from '../controllers/product.Controller.js'
const router = express.Router()


router.post('/createProduct',productController.createProductController)
router.get('/fetchAllProducts',productController.fetchAllProductController)


export default router