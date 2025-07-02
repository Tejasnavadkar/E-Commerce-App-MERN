import express from 'express'
import productController from '../controllers/product.Controller.js'
const router = express.Router()


router.post('/createProduct',productController.createProductController)
router.get('/fetchAllProducts',productController.fetchAllProductController)
router.get('/fetchProductById/:id',productController.fetchProductByIdController)
router.patch('/updateProduct/:id',productController.updateProductController)


export default router