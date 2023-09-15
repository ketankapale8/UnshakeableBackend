
import { Order } from "../models/Order.js";
import { User } from "../models/users.js";
import { sendMail } from "../utils/sendMail.js";

// Create Services //
export const CreateOrder = async (req , res) => {
    try{
        const {email, user_id, servicePlan , serviceVal , payOptions, startDate, total, selectedOption} = req.body;
        const order = await Order.create({
            email ,
            user_id ,
            payOptions , 
                    startDate ,
                    total  ,
                     selectedOption
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
            "Credimotion's Portal Update",
            ` Payment for your vehicle has been processed with Amount : ${total} for plan ${ServicePlan},  which will start from ${startDate}.
            Thankyou for choosing Credimotion!
            `,
          );
        res.send({json: "Updated"})

    }catch(err){
        res.status(500).json({ success: false, msg: err.message });
    }
}

//Update Services // 

// export const UpdateServices= async (req , res) => {
//     try{
//         let user = await User.findById(req.user._id);
//         let plan = awa
//         const { ServicePlan, ServiceVal, payOptions , startDate , total , selectedOption} = req.body;
//         if(user){
            

//             plan.save()
//         }

//         await sendMail(
//             user.email,
//             `Service Plan for your vehicle is updated on Credimotion's Portal for ${user.name}`,
//           );

//     }catch(err){
//         res.status(500).json({ success: false, msg: err.message });
//     }
// }

