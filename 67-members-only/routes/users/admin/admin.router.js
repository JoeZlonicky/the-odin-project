import { Router } from 'express';
import { AdminController } from './admin.controller.js';

const adminRouter = Router();

adminRouter.post('/', AdminController.post);

export { adminRouter };
