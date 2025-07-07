import express from 'express'
import orderController from '../controllers/order.Controller.js'
const router = express.Router()

router.post('/createOrder',orderController.createOrderController)
router.get('/fetchOrderByUser/:id',orderController.fetchOrderByIdController)
router.get('/fetchAllOrders/',orderController.fetchAllOrdersController)
router.patch('/updateOrder/:id',orderController.updateOrderController)

export default router