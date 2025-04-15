export const addToCart = async (item) => {
    try {
        const response = await fetch(`http://localhost:8000/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify(item),
            // credentials: 'include',
        });
 
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to create user');
        }
 
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
 };

 export const fetchCartsByUserId = async (userId) =>{
    try {

        const response = await fetch(`http://localhost:8000/cart?user=${userId}`)
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching carts in Cart_Api-', error)
    }

 }

 export const updateCartById = async (update) =>{

    try {
        
   const response = await fetch(`http://localhost:8000/cart/${parseInt(update.id)}`,{
        method:'PATCH',
        body:JSON.stringify(update),
        headers:{'content-type':'application/json'}
    })
    const data = await response.json()
    return data

    } catch (error) {
        throw new Error('err in updateCart api:',error)        
    }
 }

 export const deleteCartItemById = async (itemId) =>{

    try {
        console.log('delet id ',itemId)
    await fetch(`http://localhost:8000/cart/${itemId}`,{
        method:'DELETE',
        headers:{'content-type':'application/json'}
    })
    return {
        id:itemId,
        msg:'cart item deleted successfully'
    }

    } catch (error) {
        throw new Error('err in updateCart api:',error)        
    }
 }