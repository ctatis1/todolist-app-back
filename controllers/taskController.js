let data = require('../test-data.json');
const Task = require('../models/tasks');
const crypto = require('crypto');

const getAllTasks = (req, res) => {
    res.status(200).json({
        MsgRsHdr:{
            Status: 200,
            StatusCode: "Consulta Exitosa",
            EndDt: new Date()
        },
        Tasks: data
    });
};

const createTask = (req, res) => {
    const {title, description} = req.body;
    const id = crypto.randomUUID();
    const parsedBody = new Task(id, title, description);
    data.push(parsedBody);
    res.status(200).json({
        MsgRsHdr:{
            Status: 200,
            StatusCode: "Creación Exitosa",
            EndDt: new Date()
        }
    });
}

const deleteTask = (req, res) => {
    const { id } = req.params;
    data = data.filter((task) => task.id != id);
    res.status(200).json({
        MsgRsHdr:{
            Status: 200,
            StatusCode: "Eliminación Exitosa",
            EndDt: new Date()
        }
    });
}

module.exports = { getAllTasks, createTask, deleteTask };