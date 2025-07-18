import mongoose from 'mongoose'


const brandSchema = new mongoose.Schema({
    label:{
        type:String,
        required:true,
        unique:true
    },
    value:{
        type:String,
        required:true,
        unique:true
    }
})

const virtual = brandSchema.virtual('id')

virtual.get(function(){
    return this._id
})

brandSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){
        delete ret._id
    }
})


const brandModel = mongoose.model("Brand",brandSchema)

export default brandModel