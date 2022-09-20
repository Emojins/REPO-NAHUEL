const { getTasks, postTask, putTask, deleteTask } = require('../controllers/task');


const TaskRouter = require('express').Router();



TaskRouter.get('/task', getTasks);

TaskRouter.post('/task', postTask);

TaskRouter.put('/task/:idTask', putTask);

TaskRouter.delete('/task/:idTask', deleteTask)



module.exports = TaskRouter;
