import { Router } from 'express';
import { LogOutController } from './logOut.controller.js';

const logOutRouter = Router();

logOutRouter.get('/', LogOutController.get);

export { logOutRouter };
