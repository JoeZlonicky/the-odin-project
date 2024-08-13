import { Router } from 'express';
import * as controller from '../controllers/songsController.js';

const songsRouter = Router();

songsRouter.get('/', controller.getSongs);

songsRouter.get('/view', controller.viewSongs);

export default songsRouter;
