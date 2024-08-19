import { Router } from 'express';
import { authenticate } from '../../../auth/authenticate.js';
import { logIn } from './logIn.controller.js';

const logInRouter = Router();

logInRouter.get('/view', logIn.view);

logInRouter.post('/', authenticate);

export { logInRouter };
