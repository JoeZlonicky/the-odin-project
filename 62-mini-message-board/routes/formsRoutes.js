import { Router } from 'express';
import * as forms from '../controllers/formsController.js';

const formsRouter = Router();
formsRouter.get('/', forms.getMessageForm);

export default formsRouter;
