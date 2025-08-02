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
    // discountPrice:{
    //     type: Number,
    //     min: [1, "wrong min price"],
    //     max: [10000, "wrong max price"],
    // },
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
    },
    sizes:{
        type:[mongoose.Schema.Types.Mixed],  // used when there is complex json object and // correction: dont make [] its an obj type:mongoose.Schema.Types.Mixed
    },
    colors:{
        type:[mongoose.Schema.Types.Mixed],  // used when there is complex json object
    },
     highlights:{ 
        type : [String] 
    }
});

// here we create virtual that creats a virtual data eg in frontend we use .id 
// but in db it creates _id so here we just convert _id to id so we can easily use this in frontend now in response it give 'id'
const virtualId = productSchema.virtual('id')
virtualId.get(function(){
    return this._id
})

//we can't sort using the virtual fields. coz its not actually present in db. better to make this field at time of document creation 
// const virtualDiscount Price = productSchema.virtual('discountPrice'); but becoz of this we dont need discountPrice function in frontend
// virtualDiscountPrice.get(function() { // this only used in frontend
// return Math.round(this.price* (1-this.discountPercentage/100));
// })

productSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){
        delete ret._id
    }
})

const productModel = mongoose.model("Product", productSchema);

export default productModel;
