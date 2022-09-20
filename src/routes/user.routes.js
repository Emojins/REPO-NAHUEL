 const router = require("express").Router();

const {getUser, postUser, putUser, deleteUser} = require("../controllers/users")


router.get("/", getUser)
router.post("/", postUser)
router.put("/", putUser)
router.delete("/", deleteUser)


module.exports = router;