import mongoose from 'mongoose'

// add colors and sizes in schema
const cartSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    color:{
      type:[mongoose.Schema.Types.Mixed] // correction: dont make [] its an obj type:mongoose.Schema.Types.Mixed
    },
    size:{
      type:[mongoose.Schema.Types.Mixed] //if you [mongoose.sche..] make it When you don't provide a value for size, Mongoose will default it to an empty array ([]) instead of undefined or null.
    },
    user:{
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