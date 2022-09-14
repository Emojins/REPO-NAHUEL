
const ctrlHome = {}

ctrlHome.getHome = (req, res)=>{
    res.send({
        nombre: "nahuel",
        apellido: "paniagua"
      })
    }

ctrlHome.postHome = (req, res)=>{
    res.send({
        message: "peticion POST"
})
 }

 ctrlHome.putHome = (req, res)=>{
res.send({
 message: "peticion PUT"
})
}

ctrlHome.deleteHome = (req, res)=>{
    res.send({
 message: "peticion DELETE"
})
}
            



module.exports = ctrlHome;