import axios from "axios"



export const CreateOrder = async (payload) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/order/createOrder`,payload)
        const data = response.data.order
        return data
    } catch (error) {
        throw new Error(error.response.data.msg || 'cant place order..')
    }

}

export const fetchAllOrders = async ({pagination,sort}) =>{

    let queryString =''

    for(let key in pagination){
        queryString+=`${key}=${pagination[key]}&`
    }

    for(let key in sort){
        queryString+=`${key}=${sort[key]}&`
    }

   const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/order/fetchAllOrders?${queryString}`)

   const orders = response.data.allOrders
   const totalOrders = await response.headers['x-total-count']

//    return {data:data,totalOrders:totalOrders}
     console.log('totalOrders',totalOrders)
    return {
        orders,
        totalOrders
    }

    
}

export const updateOrder = async (payload) => {
    try {
        // const response = await fetch(`http://localhost:8000/orders/${payload.id}`, {
        //     method: 'PATCH',
        //     body: JSON.stringify(payload)
        // })

        const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/order/updateOrder/${payload.id}`,{status:payload.status})
        const data = response.data.updatedOrder
        return data
    } catch (error) {
        throw new Error(error.message)
    }

}