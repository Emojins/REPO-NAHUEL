const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
    {
        id:{
            type:Number
        },
        nombre:{
            type:String,
            required:true
        },
        motivo:{
            type:String,
            max:300
        },
        fecha:{
            type:Date,
            default:new Date()
        },
        estado:{
            type:Number,
            max:3,
            default:1
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = model("task",TaskSchema);