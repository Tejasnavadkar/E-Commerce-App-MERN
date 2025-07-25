import mongoose from 'mongoose'


 const ConnectDb = async () =>{
    const connectionString = process.env.DB_URL
    try {
       await mongoose.connect(connectionString).then(()=>{
            console.log('Db connection successfull')
        }).catch((err)=>{
            console.log(`Db connection error: ${err}`)
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

export default {
    ConnectDb
}