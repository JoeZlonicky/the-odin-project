import { Router } from 'express';
import * as controller from './logOut.controller.js';

const logOutRouter = Router();

logOutRouter.get('/', controller.get);

export { logOutRouter };
