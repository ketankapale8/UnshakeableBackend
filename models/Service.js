import mongoose from 'mongoose';

const servicesSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },

        ServicePlan : {
            type : String,
            required : true

        },

        ServiceVal : {
            type : Number,
            required : true
        },

        payOptions : {
            type : String,
            required : true
        }
        ,
        startDate : {
            type : Date,
            required : true
        },

        total : {
            type : Number,
            required : true
        }, 

        selectedOption : {
            type : String, 
            required : true
        }




        // Fast : {
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : 'User',  
        //     type: Number,
        //     required : false,
        //     defaultFees: 0, 
        // },
        // Radial : {
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : 'User', 
        //     type: Number,
        //     required : false,
        //     defaultFees: 38.99
        // },
        // Performance : {
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : 'User', 
        //     type: Number,
        //     required : false,
        //     default: 78.99

        // },
        // STS : {
        //     type : mongoose.Schema.Types.ObjectId,
        //     ref : 'User', 
        //     type: Number,
        //     required : false,
        //     default: 197.99
        // }
    }
)

export const Service = mongoose.model('Service', servicesSchema)