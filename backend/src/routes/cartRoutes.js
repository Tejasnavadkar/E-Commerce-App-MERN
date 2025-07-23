import express from 'express'
import cartController from '../controllers/cart.Controller.js'
import { isAuth } from '../middlewares/Auth.js'

const router = express.Router()

router.post('/addToCart',isAuth(),cartController.addToCartController)
router.get('/fetchCarts/',isAuth(),cartController.fetchCartByIdController)
router.patch('/updateCart/:id',isAuth(),cartController.updateCartController)
router.delete('/deleteCart/:id',isAuth(),cartController.deleteCartController)
router.delete('/resetCart/',isAuth(),cartController.resetCarByIdController)



export default router