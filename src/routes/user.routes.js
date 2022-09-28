 const router = require("express").Router();

const {getUser, postUser, putUser, deleteUser} = require("../controllers/users")


router.get("/user", getUser)
router.post("/user", postUser)
router.put("/user/:idUser", putUser)
router.delete("/user/:idUser", deleteUser)


module.exports = router;