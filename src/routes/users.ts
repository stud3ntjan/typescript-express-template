import { Router } from 'express';
import UserModel from '../database/models/UserModel';

const UsersRouter = Router();

// Beispielroute zum Abrufen aller Benutzer
UsersRouter.get('/', async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default UsersRouter;
