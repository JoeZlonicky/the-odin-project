import { Router } from 'express';
import { MessagesController } from './messages.controller.js';

const messagesRouter = Router();

messagesRouter.get('/:id(\\d)+', MessagesController.get);

export { messagesRouter };
