import userServices from "../services/userServices.js"




const fetchUserByIdController = async (req,res) =>{
    try {
        const {id} = req.user
        const user = await userServices.fetchUserById(id)
        res.status(201).json({
            user
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const updateUserController = async (req, res) => {

    try {
        const { id } = req.user
        console.log('userID-',id)
        const data = req.body

        const updatedUser = await userServices.updateUser({ id, data })
        res.status(200).json({
            msg: 'user updated',
            updatedUser
        })

    } catch (error) {
        res.status(400).json(error.message)
    }
}

export default {
  
    fetchUserByIdController,
    updateUserController
}