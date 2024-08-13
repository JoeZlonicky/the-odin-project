import { Router } from 'express';
import * as controller from '../controllers/songsController.js';

const songsRouter = Router();

songsRouter.get('/', controller.getSongs);
songsRouter.get('/view', controller.viewSongs);

songsRouter.get('/:id', controller.getSong);
songsRouter.get('/:id/view', controller.viewSong);

export default songsRouter;
