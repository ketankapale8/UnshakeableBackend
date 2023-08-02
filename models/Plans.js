import mongoose from 'mongoose';

const planSchema = new mongoose.Schema(
    {
        Fast : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',  
            type: Number,
            required : false,
            default: 0
        },
        Radial : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User', 
            type: Number,
            required : false,
            default: 1.5
        },
        Performance : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User', 
            type: Number,
            required : false,
            default: 2.5

        },
        STS : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User', 
            type: Number,
            required : false,
            default: 10
        }
    }
)

export const Plans = mongoose.model('Plans', planSchema)