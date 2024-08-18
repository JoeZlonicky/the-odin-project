import { Router } from 'express';
import * as controller from './signUp.controller.js';

const signUpRouter = Router();

signUpRouter.get('/view', controller.view);

signUpRouter.get('/', controller.get);
signUpRouter.post('/', controller.post);

export { signUpRouter };
