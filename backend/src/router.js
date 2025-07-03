import express from 'express'
import productRouter from './routes/productRoutes.js'
import categoryRouter from './routes/cateogoriesRoutes.js'
import brandRouter from './routes/brandsRoutes.js'
import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'
const router = express.Router()

// product related routes
router.use('/api/product',productRouter)
router.use('/api/categories',categoryRouter)
router.use('/api/brands',brandRouter)
router.use('/api/users',userRouter)
router.use('/api/auth',authRouter)

export default router