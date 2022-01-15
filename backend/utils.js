import jwt from "jsonwebtoken";


export const generateToken = (user)=>{
   return jwt.sign(
       {
           _id:user._id,
           name:user.name,
           email:user.email,
           isadmin:user.isadmin
       },
       process.env.JWT_SECRET || "somethingsecret",
       {
           expiresIn:'30d'
       }

   )
}