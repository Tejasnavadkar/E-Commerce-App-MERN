import userModel from "../models/user.js"

const createUser = async (data) =>{

    try {
       const user = new userModel(data)
       return await user.save()

    } catch (error) {
        throw new Error(error.massage)
    }
}

const fetchUser = async (email) =>{

    try {
       const user = await userModel.findOne({email})
       return user

    } catch (error) {
        throw new Error(error.massage)
    }
}

export default {
     createUser,
     fetchUser
}