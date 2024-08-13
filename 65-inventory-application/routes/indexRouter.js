import { Router } from 'express';
import * as controller from '../controllers/indexController.js';

const indexRouter = Router();

indexRouter.get('/view', controller.viewIndex);
indexRouter.get('/', controller.readIndex);

export default indexRouter;
