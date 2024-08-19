import { Router } from 'express';
import { pageNotFound } from './_errors/pageNotFound.controller.js';
import { serverError } from './_errors/serverError.controller.js';
import { authRouter } from './auth/auth.router.js';
import { index } from './index.controller.js';

const indexRouter = Router();

indexRouter.use('/auth', authRouter);

indexRouter.get('/view', index.view);
indexRouter.get('/', index.read);

indexRouter.use(serverError.view);
indexRouter.use(pageNotFound.view);

export { indexRouter };
