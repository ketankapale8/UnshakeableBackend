import { Service } from "../models/Service";
import { User } from "../models/users";
import { sendMail } from "../utils/sendMail";

// Create Services //
export const CreateService = async (req , res) => {
    try{
        let user = await User.findById(req.user._id);
        const { ServicePlan, ServiceVal, payOptions , startDate , total , selectedOption} = req.body;
        if(user){
            plan = await Service.create({
                ServicePlan,
                ServiceVal, 
                payOptions , 
                startDate , 
                total ,
                 selectedOption
            })

            await plan.save()
        }

        await sendMail(
            user.email,
            `Service Plan for your vehicle is updated on Credimotion's Portal for ${user.name}`,
          );

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

