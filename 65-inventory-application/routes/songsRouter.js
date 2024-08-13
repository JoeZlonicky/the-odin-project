import { Router } from 'express';
import * as controller from '../controllers/songsController.js';

const songsRouter = Router();

songsRouter.get('/:id(\\d+)', controller.readSong);
songsRouter.get('/:id(\\d+)/view', controller.viewSong);

songsRouter.get('/', controller.readAllSongs);
songsRouter.get('/view', controller.viewAllSongs);

export default songsRouter;
