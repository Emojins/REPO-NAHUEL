
// importamos el modelo de User
const User = require("../models/users");
// iniciamos el controlador user como object
const CtrlUser = {};

CtrlUser.getUser = async (req, res) => {
    const users = await User.find();

    return res.json({
        message: "Usuarios encontrados.",
        usuarios: users
    })
}

CtrlUser.postUser = async (req, res) => {
    const {name, password, email} = req.body;

    const newUser = new User({
        name,
        password,
        email
    })

    const user = await newUser.save();

    return res.json({
        message: "Usuario creador correctamente.",
        user
    })
}

CtrlUser.putUser = async (req, res) =>{
    return res.json({
        message: "Usuario modificado correctamente.",

    })
}

CtrlUser.deleteUser = async (req, res) => {
    return res.json({
        message: "Usuario eliminado correctamente.",

    })
}

module.exports = CtrlUser;        
