let data = require('../test-data.json');
const Task = require('../models/tasks');
const crypto = require('crypto');
const { genericGetResp, genericPostDeleteResp } = require('../models/responses');
const logger = require('../utils/logger');
const { validationResult } = require('express-validator');

const getAllTasks = (req, res) => {
    return res.status(200).json(genericGetResp('Consulta Exitosa', data));
};

const createTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        const errResp = [];
        errors.errors.map((err) => {
            errResp.push(`${err.path}: ${err.msg} (${err.value})`);
        });
        return res.status(400).json(genericPostDeleteResp(errResp));
    }
    const {title, description} = req.body;
    const id = crypto.randomUUID();
    const parsedBody = new Task(id, title, description);
    data.push(parsedBody);
    return res.status(200).json(genericPostDeleteResp('Creación Exitosa'));
}

const deleteTask = (req, res) => {
    const { id } = req.params;
    const taskFound = data.find((task) => task.id === id);
    if (taskFound != null){
        data = data.filter((task) => task.id != id);
        return res.status(200).json(genericPostDeleteResp('Eliminación Exitosa'));
    }
    return res.status(400).json(genericPostDeleteResp('No se encontró una Task con ese identificador'));
}

module.exports = { getAllTasks, createTask, deleteTask };