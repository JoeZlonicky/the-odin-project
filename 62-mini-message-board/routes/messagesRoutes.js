import { Router } from 'express';
import * as messages from '../controllers/messagesController.js';

const messagesRouter = Router();

messagesRouter.get('/', messages.getAll);
messagesRouter.get('/:id(\\d+)', messages.getMessage);

messagesRouter.post('/', messages.postMessage);

export default messagesRouter;
