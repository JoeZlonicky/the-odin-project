import { Router } from 'express';
import { LogInController } from './logIn.controller.js';

const logInRouter = Router();

logInRouter.get('/', LogInController.get);
logInRouter.post('/', LogInController.post);

export { logInRouter };
