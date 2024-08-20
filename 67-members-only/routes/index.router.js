import { Router } from 'express';
import { PageNotFoundController } from './_errors/pageNotFound.controller.js';
import { ServerErrorController } from './_errors/serverError.controller.js';
import { authRouter } from './auth/auth.router.js';
import { IndexController } from './index.controller.js';
import { messagesRouter } from './messages/messages.router.js';

const indexRouter = Router();

indexRouter.use('/auth', authRouter);
indexRouter.use('/messages', messagesRouter);

indexRouter.get('/', IndexController.get);

indexRouter.use(PageNotFoundController.get);
indexRouter.use(ServerErrorController.handle);

export { indexRouter };
