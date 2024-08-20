import { Router } from 'express';
import { UsersController } from './users.controller.js';

const usersRouter = Router();

usersRouter.get('/:id(\\d)+', UsersController.get);

export { usersRouter };
