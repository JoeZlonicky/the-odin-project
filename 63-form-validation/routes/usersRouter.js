import { Router } from 'express';
import {
  getCreateUser,
  getUpdateUser,
  getUsersList,
  postDeleteUser,
  postNewUser,
  postUserUpdate,
} from '../controllers/usersController.js';

const usersRouter = Router();

usersRouter.get('/', getUsersList);

usersRouter.get('/create', getCreateUser);
usersRouter.post('/create', postNewUser);

usersRouter.get('/:id/update', getUpdateUser);
usersRouter.post('/:id/update', postUserUpdate);

usersRouter.post('/:id/delete', postDeleteUser);

export default usersRouter;
