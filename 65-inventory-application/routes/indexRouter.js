import { Router } from 'express';
import * as controller from '../controllers/indexController.js';

const indexRouter = Router();

indexRouter.get('/', controller.getIndex);

indexRouter.get('/view', controller.getIndexView);

export default indexRouter;
