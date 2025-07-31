import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:Buffer,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        required:true,
        default:'user'

    },
    addresses:{
        type:[mongoose.Schema.Types.Mixed]  // used when there is complex json object
    },
    orders:{
        type:[mongoose.Schema.Types.Mixed] 
    },
    salt:{
        type:Buffer
    },
    resetPasswordToken:{
        type:String,
        default:''
    }
})

const virtual = userSchema.virtual('id')
virtual.get(function(){
    return this._id
})

userSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){
    delete ret._id
}
})


const userModel = mongoose.model('User',userSchema)
export default userModel