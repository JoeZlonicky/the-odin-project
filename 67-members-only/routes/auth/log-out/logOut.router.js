import { Router } from 'express';
import { logOut } from './logOut.controller.js';

const logOutRouter = Router();

logOutRouter.get('/', logOut.get);

export { logOutRouter };
