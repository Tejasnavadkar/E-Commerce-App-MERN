import brandModel from "../models/brand.js"


const createBrand = async (data) =>{

    try {
         const brand = new brandModel(data)
         return await brand.save()
    } catch (error) {
        throw new Error(error.message)
    }

}

const fetchBrands = async () =>{

     return brandModel.find({})

}

export default {
    createBrand,
    fetchBrands
}