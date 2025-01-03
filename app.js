require('dotenv').config();
const express = require('express');
const middlewares = require('./utils/middleware');
const taskRouter = require('./routers/taskRouter');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(middlewares.requestLogger);

app.use('/tasks',taskRouter);

module.exports = app;
