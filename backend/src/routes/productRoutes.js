import express from 'express'
import productController from '../controllers/product.Controller.js'
import { isAuth } from '../middlewares/Auth.js'
const router = express.Router()


router.post('/createProduct',isAuth(),productController.createProductController)
router.get('/fetchAllProducts',isAuth(),productController.fetchAllProductController)
router.get('/fetchProductById/:id',isAuth(),productController.fetchProductByIdController)
router.patch('/updateProduct/:id',isAuth(),productController.updateProductController)


export default router