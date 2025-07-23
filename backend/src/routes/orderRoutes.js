import express from 'express'
import orderController from '../controllers/order.Controller.js'
import { isAuth } from '../middlewares/Auth.js'
const router = express.Router()

router.post('/createOrder',isAuth(),orderController.createOrderController)
router.get('/fetchOrderByUser',isAuth(),orderController.fetchOrderByIdController)
router.get('/fetchAllOrders/',isAuth(),orderController.fetchAllOrdersController)
router.patch('/updateOrder/:id',isAuth(),orderController.updateOrderController)

export default router