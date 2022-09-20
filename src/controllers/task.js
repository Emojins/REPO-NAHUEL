// Importamos el modelo
const TaskModel = require('../models/tasks');

// Inicializamos el objeto CtrlTask
const ctrlTask = {};

ctrlTask.getTasks = async (req, res) => {
    const Tasks = await TaskModel.find();

    return res.json(
        {
            message: "Tareas Encontradas.",
            Tasks
        }
    )
}
ctrlTask.postTask = async (req, res) => {
    const {id,nombre, motivo, fecha, estado} = req.body;

    const newTask = new TaskModel(
        {
            id,
            nombre,
            motivo,
            fecha,
            estado
        }
    );

    const Task = await newTask.save();

    return res.json(
        {
            message:"Tarea guardada correctamente.",
            Task
        }
    )

};

ctrlTask.putTask = async (req, res) => {
    try {
        const id_task =  req.params['idTask'];
        const {nombre, motivo, fecha, estado} = req.body;
        const TaskAmodificar = 
            {
                nombre,
                motivo,
                fecha,
                estado
            };
            
        const TaskModificada = await TaskModel.findByIdAndUpdate(id_task, TaskAmodificar);
        return res.json(
            {
                message: "REQ PUT",
                id_task,
                TaskModificada
            }
        )
    } catch (error) {
        res.status(404).send(`La id Buscada puede que no exista en la DB: ${error}`)
    }
}

ctrlTask.deleteTask = async (req, res) => {
    try {
        const id_task = req.params['idTask'];
        TaskModel.findByIdAndDelete(id_task).exec()
        return res.json(
            {
                message: "Tarea eliminada.",
                id_task
            }
        )
    } catch (error) {
        console.log(`Error, no se pudo eliminar la tarea: ${error}`)
    }
};

module.exports = ctrlTask;