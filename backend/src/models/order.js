import mongoose from 'mongoose'


const orderSchema = new mongoose.Schema({
    products:{
        type:[mongoose.Schema.Types.Mixed],
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    totalItems:{
        type:Number,
        required:true
    },
    subTotal:{
        type:Number,
        required:true
    },
    selectedAddress:{
        type:[mongoose.Schema.Types.Mixed],
        required:true
    },
    selectedPaymentMethod:{ // later enum
        type:String,
        required:true
    },
    status:{
        type:String,
        // enum:['processing','pending','dispatched','delivered'],
        default:'pending'
    }
})

// "user": {
//         "email": "vaibhav@gmail.com",
//         "password": "123",
//         "address": [],
//         "addreses": []
//       },
//       "products": [],
//       "subTotal": 50,
//       "totalItems": 1,
//       "selectedAddress": {
//         mixed
//       },
//       "selectedPaymentMethod": "cash",
//       "status": "delievered"
//     },

const virtual = orderSchema.virtual('id')
virtual.get(function(){
    return this._id
})

orderSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){
    delete ret._id
}
})

const orderModel = mongoose.model('Order',orderSchema)
export default orderModel