import { User } from "../models/users.js";

export const getAllTokens = async (req , res) =>{
    try{
        const allUsers = User.find({})
        const tokens = allUsers.token;
        res.status(200).json({tokens})

    }catch(err){
        console.log(err)
    }
    // const userToken = User.find({email});
    // if(email){
    //    let token =  userToken.token
    // }
}