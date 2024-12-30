const taskRouter = require('express').Router();
const { getAllTasks, createTask, deleteTask } = require('../controllers/taskController');

taskRouter.get('/', getAllTasks);
taskRouter.post('/', createTask);
taskRouter.delete('/', deleteTask);

module.exports = taskRouter;