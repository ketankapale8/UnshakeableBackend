import { Service } from "../models/Service.js";
import { User } from "../models/users.js";
import { sendMail } from "../utils/sendMail.js";

// Create Services //
export const CreateService = async (req , res) => {
    try{
        const {email, user_id, ServicePlan , ServiceVal , payOptions, startDate, total, selectedOption} = req.body;
        const service = await Service.create({
            email : req.body.email,
            user_id : req.body.user_id,
            ServiceVal : req.body.ServiceVal,
                    startDate : req.body.startDate, 
                    total : req.body.total ,
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

        await sendMail(
            email,
            "Unshakeable's Portal Update",
            `Below are your Service Plan for your UnshakeableApp
                ReferenceId : ${user_id},
                Plan Amount : ${ServiceVal} $,
                Payment Option Selected : ${payOptions},
                Plan Start Date : ${startDate},
                Total Amount : ${total},

            
            `,
          );
        res.send({json: "Updated"})

    }catch(err){
        res.status(500).json({ success: false, msg: err.message });
    }
}



