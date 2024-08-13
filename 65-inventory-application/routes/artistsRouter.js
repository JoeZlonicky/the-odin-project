import { Router } from 'express';
import * as controller from '../controllers/artistsController.js';

const artistsRouter = Router();

artistsRouter.get('/', controller.getArtists);
artistsRouter.get('/view', controller.viewArtists);

artistsRouter.get('/:id', controller.getArtist);
artistsRouter.get('/:id/view', controller.viewArtist);

export default artistsRouter;
