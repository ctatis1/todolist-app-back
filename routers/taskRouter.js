const taskRouter = require('express').Router();
const { check, validationResult } = require('express-validator');
const { getAllTasks, createTask, deleteTask } = require('../controllers/taskController');

taskRouter.get('/', getAllTasks);
taskRouter.post('/', [
    check('title').notEmpty().isString(),
    check('description').notEmpty().isString()
], createTask);
taskRouter.delete('/:id', deleteTask);

module.exports = taskRouter;