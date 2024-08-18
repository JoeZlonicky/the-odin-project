import { Router } from 'express';
import { protectedRoute } from '../../../auth/protectedRoute.js';
import * as controller from './logIn.controller.js';

const logInRouter = Router();

logInRouter.get('/view', controller.view);

logInRouter.get('/', controller.get);
logInRouter.post('/', protectedRoute, controller.post);

export { logInRouter };
