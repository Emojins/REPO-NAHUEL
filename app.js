const express = require('express')
const app = express()
const path= require("path")
app.use(express.json())


const dbConnect = require('./src/db/connection');

app.use(require("./src/routes/routes"))
app.use(express.static(path.join(__dirname, 'src/public/img')));


dbConnect();


app.listen(4000, ()=> {console.log("Servidor corriendo en puerto 4000")})


