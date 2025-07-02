import categoryModel from "../models/category.js"




const createCategories = async (data) =>{

   try {
    const category = new categoryModel(data)
    return await category.save()
   } catch (error) {
    throw new Error(error.message)
   }

}

const fetchCategories = async () =>{

     return categoryModel.find({})

}

export default {
    createCategories,
    fetchCategories
}