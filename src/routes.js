import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ result: 'Test-API' }));

routes.get('/users', (req, res) =>
  res, json({
    users: [
      {
        name: 'cristian',
        age: 21,
      },
      {
        name: 'Henrique',
        age: 33,
      }
    ]
  }),

export default routes;
