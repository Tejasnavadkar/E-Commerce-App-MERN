import authServices from "../services/authServices.js"


const createUserController = async (req,res) =>{
    try {
        const data = req.body
        const createdUser = await authServices.createUser(data)
        res.status(201).json({
            msg:'user Created..',
            createdUser
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const loginController = async (req,res) =>{
    try {
        const {email,password} = req.body

        const User = await authServices.fetchUser(email)
        if(!User){
            return res.status(401).json({
                msg:'Invalid Credentials'
            })
        }
        if(User.password !== password){
            // console.log({User,password})
             return res.status(401).json({
                msg:'Invalid Credentials'
            })
        }
        res.status(201).json({
            msg:'login successfull',
            User
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const signOutController = async(req,res) => {
    // todo
}

const forgotPasswordController = async(req,res) => {
    //todo

}

export default {
      createUserController,
      loginController,
      signOutController,
      forgotPasswordController
}