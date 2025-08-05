import cartModel from "../models/cart.js"



const addToCart = async (data) => {

  try {
      const cart = new cartModel(data)
    await cart.save()
    await cart.populate('product')
    await cart.populate('user')
    
    return cart

  } catch (error) {
    throw new Error(error.message)
  }
}

const fetchCartByUserId = async (id) => {

  try {
      const carts = await cartModel.find({user:id}).populate('product').populate({
        path:'user',
        select:'id email role addresses orders'
      })
      return carts

  } catch (error) {
    throw new Error(error.message)
  }
}

const updateCart = async ({id,data}) => {

  try {
      const cart = await cartModel.findByIdAndUpdate(id,data,{new:true}).populate('product')
      return cart

  } catch (error) {
    throw new Error(error.message)
  }
}

const  deleteCart = async (id) => {

  try {
      const cart = await cartModel.findByIdAndDelete(id)
      return cart

  } catch (error) {
    throw new Error(error.message)
  }
}

const resetCart = async () => {

  try {
     await cartModel.deleteMany({});
  } catch (error) {
    throw new Error(error.message)
  }
}

export default {
    addToCart,
    fetchCartByUserId,
    updateCart,
    deleteCart,
    resetCart
}