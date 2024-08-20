import { Router } from 'express';
import { logIn } from './logIn.controller.js';

const logInRouter = Router();

logInRouter.get('/', logIn.get);
logInRouter.post('/', logIn.post);

export { logInRouter };
