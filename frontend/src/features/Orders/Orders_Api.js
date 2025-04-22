


export const CreateOrder = async (payload) => {
    try {
        const response = await fetch(`http://localhost:8000/orders`, {
            method: 'POST',
            body: JSON.stringify(payload)
        })

        const data = response.json()
        return data
    } catch (error) {
        throw new Error(error)
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

   const response = await fetch(`http://localhost:8000/orders?${queryString}`)

   const data = response.json()
   const totalOrders = await response.headers.get['x-Total-Count']

//    return {data:data,totalOrders:totalOrders}
     console.log('totalOrders',totalOrders)
    return data

    
}

export const updateOrder = async (payload) => {
    try {
        const response = await fetch(`http://localhost:8000/orders/${payload.id}`, {
            method: 'PATCH',
            body: JSON.stringify(payload)
        })

        const data = response.json()
        return data
    } catch (error) {
        throw new Error(error)
    }

}