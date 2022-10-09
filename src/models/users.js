const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    username:{
        type: String,
        min: 4,
        max:50,
        unique:true
    },
    password:{
        type:String,
        min:8,
        max:16,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    edad:{
        type: Number,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },

},{
    versionKey:false,
})
//requerimos el modelo y lo importamos a un objeto
/* UserSchema.methods.toJSON = function() {
    const { password, _id, ...user } = this.toObject();
    user.uid = _id;

    return user;
}
 */


module.exports = model("Users", UserSchema)