import { toast } from "react-toastify";
import axios from 'axios'

export const addToCart = async (item) => {
    try {   
    //    await new Promise((resolve,reject)=> setTimeout(()=>reject(),5000)) //delay 
    //     new Promise((resolve,reject)=>{
    //          fetch(`http://localhost:8000/cart`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 // 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify(item),
    //             // credentials: 'include',
    //         }).then(async (response)=>{
    //             if (!response.ok) {
    //                 const error = await response.json();
    //                 throw new Error(error.message || 'Failed to add to cart');
    //             }
        
    //             const data = await response.json();
    //             return resolve(data)
                 
    //         }).catch((err)=>{
    //                return reject(err)
    //         })
    //     })
       
       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/cart/addToCart`,item,{withCredentials:true})
       const data = response.data.cart
       return data

    } catch (error) {
       
        console.error('API Error:', error);
        throw new Error(error.response.data.msg || 'unable to add item in cart')
    
    }
};

export const fetchCartsByUserId = async () => {
    try {

        // const response = await fetch(`http://localhost:8000/cart?user=${userId}`)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/cart/fetchCarts`,{withCredentials:true})
        const data = response.data.carts
        return data

    } catch (error) {

        console.log('error while fetching carts in Cart_Api-', error)
           throw new Error(error.message) 
    }

}

export const updateCartById = async (update) => {

    try {

        // const response = await fetch(`http://localhost:8000/cart/${parseInt(update.id)}`, {
        //     method: 'PATCH',
        //     body: JSON.stringify(update),
        //     headers: { 'content-type': 'application/json' }
        // })

        const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/cart/updateCart/${update.id}`,update,{withCredentials:true})
        const data = response.data.updatedCart
        return data

    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteCartItemById = async (itemId) => {

    try {
        // console.log('delet id ', itemId)
        // await fetch(`http://localhost:8000/cart/${itemId}`, {
        //     method: 'DELETE',
        //     headers: { 'content-type': 'application/json' }
        // })

        await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/cart/deleteCart/${itemId}`,{withCredentials:true})

        // await new Promise((resolve)=>setTimeout(()=>resolve(),3000))
        return {
            id: itemId,
            msg: 'cart item deleted successfully'
        }

    } catch (error) {
        throw new Error(error.message)
    }
}

export const resetCartByUserId = async () => {

    try {
        const carts = await fetchCartsByUserId()
        const cartIds = carts.map((item) => item.id)
        for (let i = 0; i < cartIds.length; i++) {
            await deleteCartItemById(cartIds[i])
        }
    } catch (error) {
        throw new Error(error.message)
    }
}


// another approach using for of and for in loop
// export const resetCartByUserId = (userId) => {

//     try {

//     return new Promise(async (resolve)=>{
//         const response = await fetchCartsByUserId(userId)
//         const items = response.data

//         for(let item of items){    
//             await deleteCartItemById(item.id)
//         }
//         resolve({status:'success'})
//     })
        
//     } catch (error) {
//         throw new Error('err in resetCart api:', error)
//     }

// }