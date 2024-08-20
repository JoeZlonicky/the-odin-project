import { Router } from 'express';
import { signUp } from './signUp.controller.js';

const signUpRouter = Router();

signUpRouter.get('/', signUp.get);
signUpRouter.post('/', signUp.post);

export { signUpRouter };
