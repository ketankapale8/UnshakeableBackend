import mongoose from 'mongoose';
// const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId

const servicesSchema = new mongoose.Schema(
    {
        email : {
            type:String,
            required: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        Plan : {
            type : String,
            required : true

        },
        startDate : {
            type : String,
            required : true
        },

    

        selectedOption : {
            type : String, 
            required : true
        }





    }
)

export const Service = mongoose.model('Service', servicesSchema)