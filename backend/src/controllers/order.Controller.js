import orderModel from "../models/order.js"
import orderServices from "../services/orderServices.js"




const createOrderController = async (req,res) => {
        try {
            const data = req.body
            const order = await orderServices.createOrder(data)
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
    
    const {id} = req.params;

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