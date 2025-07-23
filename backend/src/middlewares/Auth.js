import passport from "passport"


export const isAuth = (req,res,done) => {
   
   return passport.authenticate('jwt', { session: false })

}