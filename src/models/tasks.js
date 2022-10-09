const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
        title:{
            type:String,
            require: true
        },
        description:{
            type:String,
            require:true
        },
        isActive:{
            type:Boolean,
            default:true
        },
        userId: {
            type: Schema.Types.ObjectId, ref: 'Users'
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = model("task",TaskSchema);