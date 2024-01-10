
import { Order } from "../models/Order1.js";
import { User } from "../models/users.js";
import { sendMail } from "../utils/sendMail.js";

// Create Services //
export const CreateOrder = async (req , res) => {
    try{
        const {email, user_id, ServicePlan , ServiceVal , payOptions, startDate, total, selectedOption} = req.body;
        const order = await Order.create({
            email : req.body.email,
            user_id : req.body.user_id,
            servicePlan : req.body.servicePlan, 
            serviceVal : req.body.serviceVal,
            payOptions : req.body.payOptions , 
                    startDate : req.body.startDate, 
                    total : req.body.total ,
                     selectedOption : req.body.selectedOption
        })

        await order.save()
        // let user = await User.findById(req.user._id);
        // console.log(user)
        // const { ServicePlan, ServiceVal, payOptions , startDate , total , selectedOption} = req.body;
        // if(user){
        //     plan = await Service.create({
        //         ServicePlan,
        //         ServiceVal, 
        //         payOptions , 
        //         startDate , 
        //         total ,
        //          selectedOption
        //     })

        //     await plan.save()
        // }

        await sendMail(
            email,
            "Unshakeable's Portal Update",
            ` Payment for your account has been processed with Amount : ${total} for plan ${servicePlan},  which will start from ${startDate}.
          
            `,
          );
        res.send({json: "Updated"})

    }catch(err){
        res.status(500).json({ success: false, msg: err.message });
    }
}


//find an order;

export const findOrder = async (req ,res) => {
    try{
        const {user_id} = req.body
        const order = await Order.findById(req.user.id);
        res.status(200).json({order , msg: 'order found!!!'})

    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
    
}


// all orders // 
export const allOrders = async (req , res) =>{
    try{
      const all = await Order.find();
      if(all){
        res.status(200).json({msg: 'All Users', orders : all})
      }
    }catch(err){
      res.status(404).json({err: err})
    }
  }

