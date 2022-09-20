const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    name:{
        type: String,
        min: 4,
        max:50
    },
    password:{
        type:String,
        min:8,
        max:16,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = model("Users", UserSchema)