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
    const {title, description, isActive} = req.body;

    const newTask = new TaskModel(
        {
            title,
            description,
            isActive
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
        const {title, description, isActive} = req.body;
        const TaskAmodificar = 
            {
                title,
                description,
                isActive
            };
            
        const TaskModificada = await TaskModel.findByIdAndUpdate(id_task, TaskAmodificar);
        return res.json(
            {
                message: "Tarea modificada:",
                id_task,
                TaskModificada
            }
        )
    } catch (error) {
        res.status(404).send(`No se encuentra el ID: ${error}`)
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