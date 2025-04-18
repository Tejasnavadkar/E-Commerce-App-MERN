


export const FetchUserById = async (userId) => {

    try {

        const response = await fetch(`http://localhost:8000/users/${userId}`,{
          
        })
        const data = response.json()
        return data

    } catch (error) {
        throw new Error('err in FetchUserById:', error)
    }
}

export const FetchUsersOrdersById = async (userId) => {

    try {

        const response = await fetch(`http://localhost:8000/orders?users.id=${userId}`,{
            method:'GET'
        })
        const data = response.json()
        return data

    } catch (error) {
        throw new Error('err in FetchUsersOrdersById:', error)
    }
}

export const updateUser = async (update) => {
    try {
        const response = await fetch(`http://localhost:8000/users/${update.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify(update),
            // credentials: 'include',
        });
 
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to update user');
        }
 
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API userUpdate Error:', error);
        throw error;
    }
 };
  // using promise