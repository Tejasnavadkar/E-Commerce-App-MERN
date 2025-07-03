import userModel from "../models/user.js"




const fetchUserById = async (id) =>{

    try {
       const user = await userModel.findById(id,'id name email') // only gives id name and email
       return user

    } catch (error) {
        throw new Error(error.massage)
    }
}

const updateUser = async ({id,data}) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id,data,{new:true})  // here we set new option = true that meanse it return updated doc
        return updatedUser
    } catch (error) {
        throw new Error(error.message)
    }
}

export default {
   
    fetchUserById,
    updateUser
}