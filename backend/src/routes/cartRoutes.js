import express from 'express'
import cartController from '../controllers/cart.Controller.js'
const router = express.Router()

router.post('/addToCart',cartController.addToCartController)
router.get('/fetchCarts/:id',cartController.fetchCartByIdController)
router.patch('/updateCart/:id',cartController.updateCartController)
router.delete('/deleteCart/:id',cartController.deleteCartController)
router.delete('/resetCart/',cartController.resetCarByIdController)

export default router