import { Router } from 'express';
import { SignUpController } from './signUp.controller.js';

const signUpRouter = Router();

signUpRouter.get('/', SignUpController.get);

export { signUpRouter };
