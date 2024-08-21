import { Router } from 'express';
import { MemberController } from './member.controller.js';

const memberRouter = Router();

memberRouter.post('/', MemberController.post);

export { memberRouter };
