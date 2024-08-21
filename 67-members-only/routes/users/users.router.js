import { Router } from 'express';
import { adminRouter } from './admin/admin.router.js';
import { logInRouter } from './log-in/logIn.router.js';
import { logOutRouter } from './log-out/logOut.router.js';
import { memberRouter } from './member/member.router.js';
import { signUpRouter } from './sign-up/signUp.router.js';
import { UsersController } from './users.controller.js';

const usersRouter = Router();

usersRouter.use('/log-in', logInRouter);
usersRouter.use('/log-out', logOutRouter);
usersRouter.use('/sign-up', signUpRouter);
usersRouter.use('/admin', adminRouter);
usersRouter.use('/member', memberRouter);

usersRouter.get('/:id(\\d)+', UsersController.get);

export { usersRouter };
