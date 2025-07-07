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
    //fetch all orders
    try {
    

    const allOrders = await orderServices.fetchAllOrders()
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