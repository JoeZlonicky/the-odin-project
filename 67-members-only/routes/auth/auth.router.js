import { Router } from 'express';
import { logInRouter } from './log-in/logIn.router.js';
import { logOutRouter } from './log-out/logOut.router.js';
import { signUpRouter } from './sign-up/signUp.router.js';

const authRouter = Router();

authRouter.use('/log-in', logInRouter);
authRouter.use('/sign-up', signUpRouter);
authRouter.use('/log-out', logOutRouter);

export { authRouter };
