import cartServices from "../services/cartServices.js"




const addToCartController = async (req,res) => {
        try {
            const {product,quantity,user} = req.body
            const cart = await cartServices.addToCart({product,quantity,user})
            res.status(200).json({
                msg:'cart added..',
                cart
            })
        } catch (error) {
            res.status(400).json(error.message)
        }

}

const fetchCartByIdController = async (req,res) => {
    //fetch by userId
    try {
    
    const {id} = req.params;

    const carts = await cartServices.fetchCartByUserId(id)
    res.status(200).json({
        msg:'all carts',
        carts
    })

    } catch (error) {
      res.status(400).json(error.message)  
    }

}

const updateCartController = async (req,res) => {
    // update quantity
    try {
        const data = req.body // only need quantity
        const {id} = req.params // cartId
        const updatedCart = await cartServices.updateCart({id,data})
        res.status(200).json({
            msg:'update successfully..',
            updatedCart
        })
    } catch (error) {
        res.status(400).json(error.message)
    }

}

const deleteCartController = async (req,res) => {
      try {
        const {id} = req.params // cartId
        const deletedCart = await cartServices.deleteCart(id)
        res.status(200).json({
            msg:'delete successfully..',
            deletedCart
        })
    } catch (error) {
        res.status(400).json(error.message)
    }


}

const resetCarByIdController = async (req,res) => {
   try {
        await cartServices.resetCart()
        res.status(200).json({ msg: "All carts deleted successfully." });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export default{
    addToCartController,
    fetchCartByIdController,
    updateCartController,
    deleteCartController,
    resetCarByIdController
}