import { Router } from 'express';
import { signUp } from './signUp.controller.js';

const signUpRouter = Router();

signUpRouter.get('/view', signUp.view);

signUpRouter.post('/', signUp.post);

export { signUpRouter };
