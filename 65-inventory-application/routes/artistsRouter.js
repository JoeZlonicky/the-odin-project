import { Router } from 'express';
import * as controller from '../controllers/artistsController.js';

const artistsRouter = Router();

artistsRouter.get('/:id(\\d+)', controller.readArtist);
artistsRouter.get('/:id(\\d+)/view', controller.viewArtist);

artistsRouter.get('/', controller.readAllArtists);
artistsRouter.get('/view', controller.viewAllArtists);

export default artistsRouter;
