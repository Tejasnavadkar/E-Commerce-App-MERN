// import axios from 'axios'

export const createUser = async (userData) => {
    try {
        const response = await fetch(`http://localhost:8000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify(userData),
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

 export const checkUser = async (loginInfo) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
  
    try {
      const response = await fetch(`http://localhost:8000/users?email=${email}`);
      if (!response.ok) {
        throw new Error('api fail');
      }
  
      const data = await response.json();
      if (data.length) {
        if (data[0].password === password) {
          return { data: data[0] }; // Return the user data if credentials are valid
        } else {
          throw new Error('invalid credentials');
        }
      } else {
        throw new Error('invalid credentials');
      }
    } catch (error) {
      throw new Error(error.message || 'An error occurred while checking user');
    }
  };
  
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
//  export const checkUser = async (loginInfo) =>{

//    return new Promise( (resolve,reject)=>{ //executor function of a Promise should not be async thats why we use then
       
//     const email = loginInfo.email
//     const password = loginInfo.password
//     fetch(`http://localhost:8000/users?email=${email}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('api fail');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       if (data.length) {
//         if (data[0].password === password) {
//           resolve({ data: data[0] });
//         } else {
//           reject({ message: 'invalid credentials' });
//         }
//       } else {
//         reject({ message: 'invalid credentials' });
//       }
//     })
//     .catch((error) => {
//       reject({ message: error.message });
//     });
// });

//  }

// export const createUser = async (userData) => {
//     try {
//         // Create AbortController to handle timeouts
//         const controller = new AbortController();
//         const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

//         const response = await fetch(`http://localhost:8000/users`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Cache-Control': 'no-cache'
//             },
//             body: JSON.stringify(userData),
//             signal: controller.signal,
//             keepalive: true // Keeps connection alive
//         });

//         clearTimeout(timeoutId);

//         // Get response data only once
//         const data = await response.json();
        
//         if (!response.ok) {
//             throw new Error(data.message || 'Failed to create user');
//         }

//         // Create a new object with only required fields to prevent reference issues
//         const userResponse = Object.freeze({
//             email: data.email,
//             id: data.id
//         });

//         return userResponse;
//     } catch (error) {
//         if (error.name === 'AbortError') {
//             throw new Error('Request timeout');
//         }
//         throw new Error(error.message || 'Failed to create user');
//     }
// };


// export const createUser = async (userData) => {
//     // Pre-create the response object to avoid reference issues
    

//     try {
//         // Make API call without AbortController to simplify the flow
//         const response = await axios.post(`http://localhost:8000/users`,userData);

//         // Parse response only once and store it
      

//         // Create response object with minimal data
        

//         // Return the pre-created object
//         return response;
//     } catch (error) {
//         console.error('API Error:', error);
//         throw new Error(error.message || 'Failed to create user');
//     }
// };