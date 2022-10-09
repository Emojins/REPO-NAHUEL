
// importamos el modelo de User
const User = require("../models/users");
//importamos el paquete bcrypt
const bcrypt = require('bcrypt');
const token = require("../helpers/generarJWT").uid
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
    const { username, password:passwordRecibida, edad, email } = req.body;
    
    // Encriptar la contraseña del usuario
    const newPassword = bcrypt.hashSync(passwordRecibida, 10);

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newUser = new User({
        username,
        password: newPassword,
        edad,
        email
    });


    const user = await newUser.save();

    return res.json({
        message: "Usuario creado correctamente.",
        user,
        token
    })
}

CtrlUser.putUser = async (req, res)=>{
    const {username, edad} = req.body;

    const id_User = req.params['uid'];

    const updateUser = await User.updateOne({id_User},
        {$set: {
            username, 
            edad
         }
        })
    
        return res.json(
            {
                message: "Usuario modificado correctamente",
                id_User,
                updateUser
            }
        )
}

CtrlUser.deleteUser = async (req, res) => {
    try {
        const id_User = req.params['idUser'];
        User.findByIdAndDelete(id_User).exec()
        return res.json(
            {
                message: "Usuario Eliminado correctamente",
                id_User
            }
        )
    } catch (error) {
        console.log(`Error, no se pudo eliminar el usuario ${error}`)
    }
};

module.exports = CtrlUser;        
