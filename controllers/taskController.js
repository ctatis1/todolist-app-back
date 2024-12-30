const getAllTasks = (req, res) => {
    res.status(200).json({});
};

const createTask = (req, res) => {
    res.status(200).json('Created');
}

const deleteTask = (req, res) => {
    res.status(200).json('Deleted');
}

module.exports = { getAllTasks, createTask, deleteTask };