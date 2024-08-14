import { Router } from 'express';
import * as controller from '../controllers/songsController.js';

const songsRouter = Router();

songsRouter.get('/:id(\\d+)', controller.readSong);
songsRouter.post('/:id(\\d+)', controller.updateSong);
songsRouter.delete('/:id(\\d+)', controller.deleteSong);
songsRouter.get('/:id(\\d+)/view', controller.viewSong);
songsRouter.get('/:id(\\d+)/viewUpdate', controller.viewUpdateSong);

songsRouter.post('/', controller.createSong);
songsRouter.get('/', controller.readAllSongs);
songsRouter.get('/view', controller.viewAllSongs);
songsRouter.get('/viewCreate', controller.viewCreateSong);

export default songsRouter;
