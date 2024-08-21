import { Router } from 'express';
import { MessagesController } from './messages.controller.js';
import { newMessageRouter } from './new-message/newMessage.router.js';

const messagesRouter = Router();

messagesRouter.use('/new', newMessageRouter);

messagesRouter.get('/:id(\\d)+', MessagesController.get);
messagesRouter.delete('/:id(\\d)+', MessagesController.remove);

messagesRouter.post('/', MessagesController.post);

export { messagesRouter };
