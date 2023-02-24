import { User } from "../models/users.js";

export const sendNoti = async (req , res) =>{
    const email = req.body;
    console.log(email)
    // const userToken = User.find({email});
    // if(email){
    //    let token =  userToken.token
    // }
}