import categoryServices from "../services/categoryServices.js"



const fetchCategories = async (req,res) => {

    try {
        const categories = await categoryServices.fetchCategories()
        res.status(200).json({
            categories:categories
        })
    } catch (error) {
        res.status(400).json(error.message)
    }

}

const createCategory = async (req,res) => {

    try {
        const data = req.body
         const createdCategory = await categoryServices.createCategories(data)

        res.status(200).json({
            msg:'category created..',
           createdCategory
        })
    } catch (error) {
        res.status(400).json(error.message)
    }

}

export default {
    fetchCategories,
    createCategory
}