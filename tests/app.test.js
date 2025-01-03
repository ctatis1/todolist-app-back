const request = require('supertest');
const app = require('../app');
const data = require('../test-data.json');
const taskToDelete = '58c96e33-1583-445d-8e52-310a2c90f6f0';
const taskToNotDelete = '58c96e33-1583-445d-8e52-310a2c90f6f1';

describe('GET /tasks/', () => {
    test('return all the tasks', async () => {
      const res = await request(app).get('/tasks');
      expect(res.statusCode).toBe(200);
      const { Status: { EndDt, ...otherStatus }, ...otherBody } = res.body;
      expect({
        Status: {
          StatusDesc: 'Consulta Exitosa',
          ...otherStatus
        },
        ...otherBody
      }).toEqual({
        Status: {
          StatusDesc: 'Consulta Exitosa',
        },
        Tasks: data
      });
    });
});

describe('POST /tasks/', () => {
    test('create a new task', async () => {
      const newTask = {
        title: 'Test Task',
        description: 'Test task',
      };
      const res = await request(app).post('/tasks').send(newTask);
      expect(res.statusCode).toBe(200);
      const { Status: { EndDt, ...otherStatus } } = res.body;
      expect({
        Status: {
          StatusDesc: 'Creación Exitosa',
          ...otherStatus
        }
      }).toEqual({
        Status: {
          StatusDesc: 'Creación Exitosa',
        }
      });
    });
    test('should not create a new task (title is not text)', async () => {
      const newTask = {
        title: 123,
        description: 'Test task',
      };
      const res = await request(app).post('/tasks').send(newTask);
      expect(res.statusCode).toBe(400);
      expect({
        Status: {
          StatusDesc: [
            "title: Invalid value (123)"
          ]
        }
      }).toEqual({
        Status: {
          StatusDesc: [
            "title: Invalid value (123)"
          ]
        }
      });
    });
    test('should not create a new task (description is not text)', async () => {
      const newTask = {
        title: 123,
        description: 'Test task',
      };
      const res = await request(app).post('/tasks').send(newTask);
      expect(res.statusCode).toBe(400);
      expect({
        Status: {
          StatusDesc: [
            "description: Invalid value (123)"
          ]
        }
      }).toEqual({
        Status: {
          StatusDesc: [
            "description: Invalid value (123)"
          ]
        }
      });
    });
});

describe('DELETE /tasks/:id', () => {
    test('delete task by ID', async () => {
      const res = await request(app).delete(`/tasks/${taskToDelete}`);
      expect(res.statusCode).toBe(200);
      const { Status: { EndDt, ...otherStatus } } = res.body;
      expect({
        Status: {
          StatusDesc: 'Eliminación Exitosa',
          ...otherStatus
        }
      }).toEqual({
        Status: {
          StatusDesc: 'Eliminación Exitosa',
        }
      });
    });
    test('should not delete task (ID does not exist)', async () => {
      const res = await request(app).delete(`/tasks/${taskToNotDelete}`);
      expect(res.statusCode).toBe(400);
      const { Status: { EndDt, ...otherStatus } } = res.body;
      expect({
        Status: {
          StatusDesc: 'No se encontró una Task con ese identificador',
          ...otherStatus
        }
      }).toEqual({
        Status: {
          StatusDesc: 'No se encontró una Task con ese identificador',
        }
      });
    });
});