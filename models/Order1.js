import mongoose from 'mongoose';
// const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema(
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

        servicePlan : {
            type : String,
            required : true

        },

        serviceVal : {
            type : String,
            required : true
        }

   
        ,
        startDate : {
            type : String,
            required : true
        },

        total : {
            type : Number,
            required : true
        }, 

     




    }
)

export const Order = mongoose.model('Order', OrderSchema)