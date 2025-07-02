import productModel from "../models/product.js"



const createProducts = async (data) =>{

    try {
         const product = new productModel(data)
          return await product.save()
    } catch (error) {
        throw new Error(error.message)
    }

}

const fetchProductById = async (id) => {
    try {
        const product = await productModel.findById(id)
        return product
    } catch (error) {
        throw new Error(error.message)
    }
}

const updateProduct = async ({id,data}) => {
    try {
        const product = await productModel.findByIdAndUpdate(id,data,{new:true})  // here we set new option = true that meanse it return updated doc
        return product
    } catch (error) {
        throw new Error(error.message)
    }
}

//fetchProduct(req)


export default {
    createProducts,
    fetchProductById,
    updateProduct
}