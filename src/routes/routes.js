 const router = require("express").Router();

const {getHome, postHome, putHome, deleteHome} = require("../controllers/controllers")


router.get("/", getHome)
router.post("/", postHome)
router.put("/", putHome)
router.delete("/", deleteHome)


module.exports = router;