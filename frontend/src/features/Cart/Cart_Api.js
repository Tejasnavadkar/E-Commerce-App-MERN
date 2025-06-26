import { toast } from "react-toastify";

export const addToCart = async (item) => {
    try {


        
    //    await new Promise((resolve,reject)=> setTimeout(()=>reject(),5000)) //delay
       
        
        new Promise((resolve,reject)=>{
             fetch(`http://localhost:8000/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json'
                },
                body: JSON.stringify(item),
                // credentials: 'include',
            }).then(async (response)=>{
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || 'Failed to add to cart');
                }
        
                const data = await response.json();
                return resolve(data)
                 
            }).catch((err)=>{
                   return reject(err)
            })
        })
       
    } catch (error) {
       
        console.error('API Error:', error);
        throw new Error(error)
    
    }
};

export const fetchCartsByUserId = async (userId) => {
    try {

        const response = await fetch(`http://localhost:8000/cart?user=${userId}`)
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching carts in Cart_Api-', error)
    }

}

export const updateCartById = async (update) => {

    try {

        const response = await fetch(`http://localhost:8000/cart/${parseInt(update.id)}`, {
            method: 'PATCH',
            body: JSON.stringify(update),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json()
        return data

    } catch (error) {
        throw new Error('err in updateCart api:', error)
    }
}

export const deleteCartItemById = async (itemId) => {

    try {
        console.log('delet id ', itemId)
        await fetch(`http://localhost:8000/cart/${itemId}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
        // await new Promise((resolve)=>setTimeout(()=>resolve(),3000))
        return {
            id: itemId,
            msg: 'cart item deleted successfully'
        }

    } catch (error) {
        throw new Error('err in updateCart api:', error)
    }
}

export const resetCartByUserId = async (userId) => {

    try {
        const carts = await fetchCartsByUserId(userId)
        const cartIds = carts.map((item) => item.id)
        for (let i = 0; i < cartIds.length; i++) {
            await deleteCartItemById(cartIds[i])
        }
    } catch (error) {
        throw new Error('err in resetCart api:', error)
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