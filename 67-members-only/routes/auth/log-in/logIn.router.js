import { Router } from 'express';
import { logIn } from './logIn.controller.js';

const logInRouter = Router();

logInRouter.get('/view', logIn.view);

logInRouter.post('/', logIn.post);

export { logInRouter };
