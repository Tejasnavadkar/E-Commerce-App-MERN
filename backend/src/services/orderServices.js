import orderModel from "../models/order.js"


const createOrder = async (data) => {
    try {

        const order = new orderModel(data)
        await order.save()
        return order
        
    } catch (error) {
        throw new Error(error.message)
    }
}

const fetchOrdersByUser = async(id) =>{
    try {
        const orders = await orderModel.find({user:id}).populate({
        path:'user',
        select:'id email role addresses orders'
      })
        return orders
    } catch (error) {
        throw new Error(error.message)
    }
}

const fetchAllOrders = async() =>{
    try {
        const allOrders = await orderModel.find({}).populate({
        path:'user',
        select:'id email role addresses orders'
      })
        return allOrders
    } catch (error) {
        throw new Error(error.message)
    }
}

const updateOrder = async({id,data}) =>{
    try {
        // console.log({id,data})
        const updatedOrder = await orderModel.findByIdAndUpdate(id,data,{new:true})
        return updatedOrder
    } catch (error) {
        throw new Error(error.message)
    }
}

export default{
    createOrder,
    fetchOrdersByUser,
    fetchAllOrders,
    updateOrder
}