import { Router } from 'express';
import * as messages from '../controllers/messagesController.js';

const messagesRouter = Router();

messagesRouter.get('/', messages.getAll);
messagesRouter.post('/', messages.postMessage);

messagesRouter.get('/:id', messages.getMessage);

export default messagesRouter;
