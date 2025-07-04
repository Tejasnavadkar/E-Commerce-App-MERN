import mongoose from 'mongoose'


const cartSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const virtual = cartSchema.virtual('id')
virtual.get(function(){
    return this._id
})

cartSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){
    delete ret._id
}
})

const cartModel = mongoose.model('Cart',cartSchema)
export default cartModel