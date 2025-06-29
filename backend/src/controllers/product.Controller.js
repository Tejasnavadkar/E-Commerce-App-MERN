import productModel from "../models/product.js";

// different way
const createProductController = async (req, res) => {
    try {
        const data = req.body;
        const product = new productModel(data);
        const createdProduct = await product.save();
        // console.log('createdProduct--',createdProduct)
        if (createdProduct) {
            res.status(201).json({
                msg: "product created..",
                product: createdProduct,
            });
        }
    } catch (error) {
        console.log("error while create product--", error);
        res.status(400).json(error.message);
    }
};

const fetchAllProductController = async (req, res) => {
    try {
        // here we need query string for searching
        // filter = {"category": ["smartphone","laptops"]}
        // sort = {_sort:"price",_order="desc"}
        // TODO: on server we will support multiple values in filter
        // pagination : _page=1&_limit=10
        let query = productModel.find({}); // pehele sab find karenge then one by one we perform sorting and filtering and last me .exec to execute the query

     
        //filtering
        if(req.query.category){
            // console.log(req.query.category)
           query = query.find({category:req.query.category})
        }
        if(req.query.brand){
           query = query.find({brand:req.query.brand})
        }

        // sorting
        if(req.query._sort && req.query._order){ // if query me sort option hai to hi .sort karana
           query = query.sort({[req.query._sort]:req.query._order})  // here mongoose gives us query that is .sort({"sortfiels":sortOrder})
        }

        //pagination
        if(req.query._page && req.query._limit){
            const pageSize = req.query._limit  // 10
            const page = req.query._page // current page
            query = query.skip(pageSize*(page-1)).limit(pageSize)  // skip karana 
        }

        const allProducts = await query.exec() // whatever we query applied above exicute it
        //err
        // The error "query.exec is not a function" is because you are using await with productModel.find({}), 
        // which immediately returns the result array, not a query object. So, query is now an array, not a Mongoose query, 
        // and arrays do not have .find(), .sort(), .skip(), .limit(), or .exec() methods.
       
        res.status(201).json({
            msg: "all products",
            allProducts: allProducts,
        });
        // url sample http://localhost:8080/product/fetchAllProducts?category=smartphones&_sort=price&_order=ascending&_page=1&_limit=2
    } catch (error) {
        console.log("error while fetching products--", error);
        res.status(400).json(error.message);
    }
};

export default {
    createProductController,
    fetchAllProductController,
};

//  product.save((err,doc)=>{   but now save() not accepts callback anymore use async await
//         console.log((err,doc))
//         if(err){
//             res.status(400).json(err)
//         }else{
//             res.status(201).json({
//                 msg:'product created..',
//                 product:doc
//             })
//         }
//     })
