const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
        title:{
            type:String,
            require: true,
            unique: true
        },
        description:{
            type:String,
            require:true,
            unique: true
        },
        isActive:{
            type:Boolean,
            default:true
        },
        userId: {
            type: Schema.Types.ObjectId, ref: 'Users',
            require: true
        }
    },
    {
        timestamps:false,
        versionKey:false
    }
);

module.exports = model("task",TaskSchema);