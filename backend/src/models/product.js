import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: [1, "wrong min price"],
        max: [10000, "wrong max price"],
    },
    discountPercentage: {
        type: Number,
        min: [1, "wrong min discount"],
        max: [99, "wrong max discount"],
    },
    rating: {
        type: Number,
        min: [0, "wrong min rating"],
        max: [5, "wrong max price"],
        default: 0,
    },
    stock: {
        type: Number,
        min: [0, "wrong min stock"],
        default: 0
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: [String], // array of strings url
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

// here we create virtual that creats a virtual data eg in frontend we use .id 
// but in db it creates _id so here we just convert _id to id so we can easily use this in frontend now in response it give 'id'
const virtual = productSchema.virtual('id')

virtual.get(function(){
    return this._id
})

productSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){
        delete ret._id
    }
})

const productModel = mongoose.model("Product", productSchema);

export default productModel;
