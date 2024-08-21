import { Router } from 'express';
import { UsersController } from './users.controller.js';

const usersRouter = Router();

usersRouter.post('/member', UsersController.updateToMember);
usersRouter.post('/admin', UsersController.updateToAdmin);

usersRouter.get('/:id(\\d)+', UsersController.get);

export { usersRouter };
