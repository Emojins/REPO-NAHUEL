const { getTasks, postTask, putTask, deleteTask, getTasksByUser } = require('../controllers/task');


const TaskRouter = require('express').Router();
const validarJWT = require("../middlewares/validarJWT")

TaskRouter.get('/task', getTasks);

TaskRouter.get('/task/:userId', getTasksByUser);

TaskRouter.post('/task', validarJWT, postTask);

TaskRouter.put('/task/:idTask', validarJWT, putTask);

TaskRouter.delete('/task/:idTask', validarJWT, deleteTask)



module.exports = TaskRouter;
