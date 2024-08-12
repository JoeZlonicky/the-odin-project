import { Router } from 'express';
import {
  deleteUsernames,
  getNewUsername,
  getUsernamesList,
  postNewUsername,
} from '../controllers/usernamesController.js';

const usernamesRouter = Router();

usernamesRouter.get('/', getUsernamesList);

usernamesRouter.get('/new', getNewUsername);
usernamesRouter.post('/new', postNewUsername);

usernamesRouter.get('/delete', deleteUsernames);

export default usernamesRouter;
