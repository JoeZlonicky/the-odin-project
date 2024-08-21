import { Router } from 'express';
import { PageNotFoundController } from './_errors/page-not-found/pageNotFound.controller.js';
import { ServerErrorController } from './_errors/server-error/serverError.controller.js';
import { IndexController } from './index.controller.js';
import { messagesRouter } from './messages/messages.router.js';
import { usersRouter } from './users/users.router.js';

const indexRouter = Router();

indexRouter.use('/messages', messagesRouter);
indexRouter.use('/users', usersRouter);

indexRouter.get('/', IndexController.get);

indexRouter.use(PageNotFoundController.get);
indexRouter.use(ServerErrorController.handle);

export { indexRouter };
