const taskRouter = require('express').Router();
const { check } = require('express-validator');
const { getAllTasks, createTask, deleteTask } = require('../controllers/taskController');

taskRouter.get('/', getAllTasks);
taskRouter.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('description', 'La descripción es obligatoria').not().isEmpty()
],createTask);
taskRouter.delete('/:id', deleteTask);

module.exports = taskRouter;