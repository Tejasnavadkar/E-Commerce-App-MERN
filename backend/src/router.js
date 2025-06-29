import express from 'express'
import productRouter from './routes/productRoutes.js'
const router = express.Router()

// product related routes
router.use('/api/product',productRouter)

export default router