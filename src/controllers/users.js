
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

CtrlUser.putUser = async (req, res) => {
    try {
        const id_user =  req.params['idUser'];
        const userMod = await User.findByIdAndUpdate(id_user, UserAMod);
        return res.json(
            {
                message: "REQ PUT",
                id_user,
                userMod
            }
        )
    } catch (error) {
        res.status(404).send(`El usuario buscado puede que no exista en la DB: ${error}`)
    }
}

CtrlUser.deleteUser = async (req, res) => {
    try {
        const id_User = req.params['idUser'];
        User.findByIdAndDelete(id_User).exec()
        return res.json(
            {
                message: "Usuario deleteado.",
                id_User
            }
        )
    } catch (error) {
        console.log(`Error, no se pudo eliminar el usuario ${error}`)
    }
};

module.exports = CtrlUser;        
