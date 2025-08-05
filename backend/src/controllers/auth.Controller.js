import authServices from "../services/authServices.js"
import crypto from 'crypto'
import { sanitizeUser } from "../services/common.js"
import tokenHandler from "../utils/tokenHandler.js"
import mailService from "../services/mailService.js"
import userModel from "../models/user.js"
import { hashPassword } from "../utils/hashPassword.js"

const createUserController = async (req,res) =>{
    try {
        const data = req.body
        const isUserExist = await authServices.fetchUser(data.email)

        if(isUserExist){
            return res.status(401).json({msg:'user with email or username already exist'})
        }


        const  {hashedPassword,salt} = hashPassword(data.password)

        const payload = {
            ...data,
            password:hashedPassword,
            salt
        }
        
        let createdUser = await authServices.createUser(payload)

        if (!createdUser) {
          res.status(401).json({ msg: "unable To create user" })
          // next(new ErrorHandler('unable to create user', 401))
          return
      }
        req.login(sanitizeUser(createdUser), function(err) { // this call serializer and storing user info in the session.
        if (err) { 
            return  res.status(400).json(err) 
        }

        const jwtToken = tokenHandler.generateJwtToken({id:createdUser.id,role:createdUser.role})

        res.cookie('jwt', jwtToken, {
            httpOnly: true,  // Prevents client-side scripts from accessing the cookie
            secure: false,    // Ensures the cookie is only sent over HTTPS connections
            sameSite: 'lax'
        }); // set Cookie in headers 

        res.status(201).json({
            msg:'user Created..',
            createdUser:sanitizeUser(createdUser),
            token:jwtToken
        })
       
      });
       

    } catch (error) {
        res.status(400).json(error.message)
    }
}

const loginController = async (req,res) =>{
    try {
        // const {email,password} = req.body

        // const User = await authServices.fetchUser(email)
        // if(!User){
        //     return res.status(401).json({
        //         msg:'Invalid Credentials'
        //     })
        // }
        // if(User.password !== password){
        //     // console.log({User,password})
        //      return res.status(401).json({
        //         msg:'Invalid Credentials'
        //     })
        // }
        
        // now the above code is not needed coz passport middleware already set user in req at the time of authentication
        
        const jwtToken = tokenHandler.generateJwtToken({id:req.user.id,role:req.user.role})

        res.cookie('jwt', jwtToken, {
            httpOnly: true,  // Prevents client-side scripts from accessing the cookie
            secure: false,    // Ensures the cookie is only sent over HTTPS connections
            sameSite: 'lax'
        }); // set Cookie in headers

        // If FE and BE runs on different ports (e.g. 3000 & 8000) and HTTP:
        // Use secure: false, sameSite: 'lax' for local dev. for set coockies in from server to browser
        // Or, run both frontend and backend on the same port (proxy).

        res.status(201).json({
            msg:'login successfull',
            User:req.user,
            token:jwtToken
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const checkUserController = async (req,res) =>{
    try {

        if(req.user){
           return  res.status(201).json({
            msg:'user is authenticated',
            User:req.user,
        })
        }else{
            res.sendStatus(401)
        }

       
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const signOutController = async(req,res) => {
    // todo

     // Clearing the cookie
      res
    .cookie('jwt', '', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      expires: new Date(0) // Set expiry to past date
    })
    .sendStatus(200)
}

const verifyMailController = async(req,res) => {
    //todo
    
    try {
        const {email} = req.body
        const user = await authServices.fetchUser(email)

        if(!user){
            return res.status(401).json({msg:'user with this email not exist'})
        }

        // generate token using crypto and send in mail and also save in user model 
        // const token = tokenHandler.generateJwtToken({id:user.id,role:user.role})
           const token = crypto.randomBytes(48).toString('hex');
           user.resetPasswordToken = token
           await user.save()
         const resetPageLink = `${process.env.FE_URL}/reset-password?token=${token}&email=${user.email}` // configure url
         const from = process.env.EMAIL_USER // from mail create seperate mail
         const to = user?.email
         const subject = 'reset password for e-commerce account'
        // const text = `Welcome to Auth-Project your account has been created with email ${user.email}`
         const html = `<p>Click <a href='${resetPageLink}'>here</a> to Reset Password</p>`
        const info = await mailService.sendVerificationMail({from, to, subject, html})
    
        res.status(201).json({
            msg:'Link has been send to verified mail',
            info
        })

    } catch (error) {
        console.log('err in verifymailController--',error)
        res.status(400).json(error || 'server error')
    }

}

const resetPasswordController = async (req,res) => {
   
    try {
        const {password,token,email} = req.body
        const user = await userModel.findOne({email:email,resetPasswordToken:token})

        if(!user) return res.status(401).json({msg:'user not exist with this email and token'})
        
        const {hashedPassword,salt} = hashPassword(password)
        user.password = hashedPassword
        user.salt = salt
        await user.save()

         const from = process.env.EMAIL_USER // from mail create seperate mail
         const to = user?.email
         const subject = 'reset password for e-commerce account'
         const html = `<p>Your password reset successfully</p>`
         await mailService.sendVerificationMail({from, to, subject, html})

        res.status(201).json({
            msg:'password successfully reset'
        })
 
    } catch (error) {
        res.status(500).json(error.message || 'server error')
    }

}

export default {
      createUserController,
      loginController,
      signOutController,
      verifyMailController,
      checkUserController,
      resetPasswordController
}