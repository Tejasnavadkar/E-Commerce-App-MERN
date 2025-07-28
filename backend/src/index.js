import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import db from './db/db.js'
import cors from 'cors'
import rootRoter from './router.js'

import passport from 'passport'
import LocalStrategy from 'passport-local'
import crypto from 'crypto'
import authServices from './services/authServices.js'
import session from 'express-session'
import { cookieExtractor, sanitizeUser } from './services/common.js'
import { Strategy as JwtStrategy, ExtractJwt, } from 'passport-jwt';
import userModel from './models/user.js'
import cookieParser from 'cookie-parser'
import nodemailer from 'nodemailer'



const app = express()
const port = process.env.PORT


let opts = {}
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = process.env.JWT_SECRET;





db.ConnectDb()

app.use(express.json()) // for body parsing
app.use(cookieParser()) // now we can get cookie from req
app.use(cors({
  origin:true,
  credentials: true,
  exposedHeaders:['X-Total-Count','X-Total-items'] // we send header from backend so we need expose that
})) // prevevt cors errors



app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.authenticate('session'));

// nodemailer transporter
// export const transporter = nodemailer.createTransport({
//     host:'smtp-relay.brevo.com',
//     port:587,
//     auth:{
//         user:process.env.SMTP_USER,
//         pass:process.env.SMTP_PASS
//     }
// })


//routes place here
app.get('/',(req,res)=>{
    res.json({
        msg:'Success'
    })
})

// passport strategies config
passport.use('local', new LocalStrategy(
    { usernameField: 'email' }, // specify field if using email
    async function verify(email, password, done) {
   
    try {
         const User = await authServices.fetchUser(email)
          if (!User) { 
            return done(null, false, { msg:'Invalid Credentials' });  // inside done first one is err and second is user
        }

         const hashedPassword = crypto.pbkdf2Sync(password,User.salt,310000, 32, 'sha256')
         if (!crypto.timingSafeEqual(Buffer.from(User.password), hashedPassword)) {
        return done(null, false, { msg:'Invalid Credentials' });
      }
      //  if(User.password !== password){
      //     return done(null, false, { msg:'Invalid Credentials' });
      //   }

      return done(null, sanitizeUser(User)); // this calls serialize
    } catch (err) {
        return done(err); // if unauthorised
    }

}));

// passport-jwt 
passport.use('jwt', new JwtStrategy(opts, async function(jwt_payload, done) {
   
  try {
    // console.log('jwt-payload--',jwt_payload)
     const user = await userModel.findById(jwt_payload.id) 
     if(!user) return done(null, false);

      return done(null, sanitizeUser(user));

  } catch (error) {
     return done(error, false);
  }
}));

app.use(rootRoter)

// this create session variable req.user on bieng called
passport.serializeUser(function(user, cb) {  // this basically add user to req and create sesssion in server side so now you have user obj on req in every single request now you have user access on every request only if session until sesion expired
  process.nextTick(function() {
    return cb(null, user);
  });
});

// this changes session variable req.user when called from authorized request
passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


// Passport user ko session me store karta hai, taki har request pe user ki info available rahe.
// - serializeUser: User ki info session me save karta hai.
// - deserializeUser: Session se user ki info nikalta hai.



app.listen(port,()=>console.log(`server started at ${port} port`))