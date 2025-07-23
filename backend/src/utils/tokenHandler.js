import jwt from "jsonwebtoken"


const generateJwtToken =  (payload) =>{
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    return jwt.sign(payload, process.env.JWT_SECRET);
}

const verifyToken = (token) =>{

    const secret = process.env.JWT_SECRET
    try {
       const decode = jwt.verify(token, secret);
       return decode
    } catch (err) {
       throw new Error(err)
    }
  }

export default{
    generateJwtToken,
    verifyToken
}