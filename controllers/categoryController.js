import Category from "../model/category.model.js"

const categoryHandler = async(req,res) =>{
    try {
        const category = await Category.find({})
        res.json(category)
    } catch (error) {
        res.status(400).json({message: "could not find category"})
    }
}

export default categoryHandler