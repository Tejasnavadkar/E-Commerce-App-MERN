import orderModel from "../models/order.js"
import productModel from "../models/product.js"
import userModel from "../models/user.js"
import cartServices from "../services/cartServices.js"
import { decreaseStocks } from "../services/common.js"
import mailService from "../services/mailService.js"
import orderServices from "../services/orderServices.js"
import userServices from "../services/userServices.js"




const createOrderController = async (req,res) => {
        try {
            const data = req.body
            const order = await orderServices.createOrder(data)
            // await cartServices.resetCart() // after order placed reset cart
            
            if(!order){
                return res.status(400).json({msg:'cant palce order'})
            }

            // service to descrease the stocks after order placed
            decreaseStocks(order) 
           

            const user = await userServices.fetchUserById(order.user)

            //todo: send invoice mail of order after order place
            const from = process.env.EMAIL_USER // from mail create seperate mail
            const to = user?.email
            const subject = 'order received successfully'
            const html = mailService.invoiceTemplate(order)

            mailService.sendVerificationMail({from, to, subject, html})  // dont make it await run it in background

            res.status(200).json({
                msg:'order created..',
                order
            })
        } catch (error) {
            res.status(400).json(error.message)
        }

}

const fetchOrderByIdController = async (req,res) => {
    //fetch by userId
    try {
    
    const {id} = req.user; //we serialize user through passport

    const orders = await orderServices.fetchOrdersByUser(id)
    res.status(200).json({
        msg:'users orders',
        orders
    })

    } catch (error) {
      res.status(400).json(error.message)  
    }

}

const fetchAllOrdersController = async (req,res) => {
    //fetch all orders (apply filters and sorting)
    try {

    // const allOrders = await orderServices.fetchAllOrders()
    let query = orderModel.find({})
    let totalProductsQuery = orderModel.find({})

    // handle sorting
    if(req.query._sort && req.query._order){
        query.sort({[req.query._sort]:req.query._order}) //.sort({"sortfiels":sortOrder})
        totalProductsQuery.sort({[req.query._sort]:req.query._order})
    }
    
    // handle pagination
    if(req.query._page && req.query._per_page){
         const pageSize = req.query._per_page
         const page = req.query._page
         query.skip(pageSize*(page-1)).limit(pageSize)
         totalProductsQuery.skip(pageSize*(page-1)).limit(pageSize)
    }
    
    const allOrders = await query.exec()
    const totalDocs = await totalProductsQuery.countDocuments().exec()
    
    res.set('X-Total-Count',totalDocs) //send doc count in headers 
    res.status(200).json({
        msg:'all orders',
        allOrders
    })

    } catch (error) {
      res.status(400).json(error.message)  
    }

}

const updateOrderController = async (req,res) => {
    // update quantity
    try {
        const data = req.body // only need quantity
        const {id} = req.params // orderId
        const updatedOrder = await orderServices.updateOrder({id,data})
        res.status(200).json({
            msg:'update successfully..',
            updatedOrder
        })
    } catch (error) {
        res.status(400).json(error.message)
    }

}





export default{
    createOrderController,
    fetchAllOrdersController,
    fetchOrderByIdController,
    updateOrderController
}