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

 export const fetchAllCarts = async () =>{
    try {

        const response = await fetch('http://localhost:8000/cart')
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching carts in Cart_Api-', error)
    }

 }