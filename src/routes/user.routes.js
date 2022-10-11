 const router = require("express").Router();

const {getUser, postUser, putUser, deleteUser} = require("../controllers/users")
const validarJWT = require("../middlewares/validarJWT")


router.get("/user", getUser)
router.post("/user", postUser)
router.put("/user/:idUser", validarJWT, putUser)
router.delete("/user/:idUser", validarJWT, deleteUser)


module.exports = router;