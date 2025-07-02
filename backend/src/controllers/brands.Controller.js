import brandServices from "../services/brandServices.js"




const fetchBrands = async (req,res) => {

    try {
        const brands = await brandServices.fetchBrands()
        res.status(200).json({
            brands:brands
        })
    } catch (error) {
        res.status(400).json(error.message)
    }

}

const createBrands = async (req,res) => {

    try {
        const data = req.body

        const createdBrand = await brandServices.createBrand(data)
        res.status(200).json({
            msg:'brand created..',
           createdBrand
        })
    } catch (error) {
        res.status(400).json(error.message)
    }

}

export default {
    fetchBrands,
    createBrands
}