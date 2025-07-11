import axios from "axios"



export const FetchUserById = async (userId) => {

    try {

        // const response = await fetch(`http://localhost:8000/users/${userId}`,{
          
        // })

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/users/fetchUserById/${userId}`)
        const data = response.data.user
        return data

    } catch (error) {
        throw new Error(error.message)
    }
}

export const FetchUsersOrdersById = async (userId) => {

    try {

        // const response = await fetch(`http://localhost:8000/orders?users.id=${userId}`,{
        //     method:'GET'
        // })
       
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/order/fetchOrderByUser/${userId}`)
        const data = response.data.orders
        return data

    } catch (error) {
        throw new Error(error.message)
    }
}

export const updateUser = async (update) => {
    try {
        // const response = await fetch(`http://localhost:8000/users/${update.id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // 'Accept': 'application/json'
        //     },
        //     body: JSON.stringify(update),
        //     // credentials: 'include',
        // });
          
        const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/users/updateUser/${update.id}`,update)
        // if (response.status !== 200) {
        //     const error = await response.json();
        //     throw new Error(error.message || 'Failed to update user');
        // }

        const data = response.data.updatedUser
        return data;
    } catch (error) {
        console.error('API userUpdate Error:', error);
        throw new Error(error.message);
    }
 };
  // using promise