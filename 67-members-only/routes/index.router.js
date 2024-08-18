import { Router } from 'express';
import * as pageNotFoundController from './_errors/pageNotFound.controller.js';
import * as serverErrorController from './_errors/serverError.controller.js';
import { authRouter } from './auth/auth.router.js';
import * as controller from './index.controller.js';

const indexRouter = Router();

indexRouter.use('/auth', authRouter);

indexRouter.get('/view', controller.view);
indexRouter.get('/', controller.read);

indexRouter.use(serverErrorController.view);
indexRouter.use(pageNotFoundController.view);

export { indexRouter };
