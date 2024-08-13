import { Router } from 'express';
import * as controller from '../controllers/artistsController.js';

const artistsRouter = Router();

artistsRouter.get('/:id(\\d+)', controller.getArtist);
artistsRouter.get('/:id(\\d+)/view', controller.viewArtist);

artistsRouter.get('/', controller.getArtists);
artistsRouter.get('/view', controller.viewArtists);

export default artistsRouter;
