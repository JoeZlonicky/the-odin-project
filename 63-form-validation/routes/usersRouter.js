import { Router } from 'express';
import {
  getCreateUser,
  getSearchResults,
  getUpdateUser,
  getUserSearch,
  getUsersList,
  postDeleteUser,
  postNewUser,
  postUserSearch,
  postUserUpdate,
} from '../controllers/usersController.js';

const usersRouter = Router();

usersRouter.get('/', getUsersList);

usersRouter.get('/create', getCreateUser);
usersRouter.post('/create', postNewUser);

usersRouter.get('/:id/update', getUpdateUser);
usersRouter.post('/:id/update', postUserUpdate);

usersRouter.post('/:id/delete', postDeleteUser);

usersRouter.get('/search', getUserSearch);
usersRouter.post('/search', postUserSearch);

usersRouter.get('/search-results', getSearchResults);

export default usersRouter;
