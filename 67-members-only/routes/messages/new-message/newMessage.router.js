import { Router } from 'express';
import { NewMessageController } from './newMessage.controller.js';

const newMessageRouter = Router();

newMessageRouter.get('/', NewMessageController.get);

export { newMessageRouter };
