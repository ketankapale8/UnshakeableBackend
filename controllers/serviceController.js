import { Service } from "../models/Service.js";
import { User } from "../models/users.js";
import { sendMail } from "../utils/sendMail.js";

// Create Services //
export const CreateService = async (req , res) => {
    try{

        const service = await Service.create({
            user_id : req.body.user_id,
            ServicePlan : req.body.ServicePlan, 
            ServiceVal : req.body.ServiceVal,
            startDate : req.body.startDate,
            payOptions : req.body.payOptions , 
                    startDate : req.body.startDate, 
                    total : req.body.total ,
                     selectedOption : req.body.selectedOption
        })

        await service.save()
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

        // await sendMail(
        //     user.email,
        //     `Service Plan for your vehicle is updated on Credimotion's Portal for ${user.name}`,
        //   );
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

