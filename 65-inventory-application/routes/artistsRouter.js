import { Router } from 'express';
import * as controller from '../controllers/artistsController.js';

const artistsRouter = Router();

artistsRouter.get('/:id(\\d+)', controller.readArtist);
artistsRouter.post('/:id(\\d+)', controller.updateArtist);
artistsRouter.delete('/:id(\\d+)', controller.deleteArtist);
artistsRouter.get('/:id(\\d+)/view', controller.viewArtist);
artistsRouter.get('/:id(\\d+)/viewUpdate', controller.viewUpdateArist);

artistsRouter.post('/', controller.createArtist);
artistsRouter.get('/', controller.readAllArtists);
artistsRouter.get('/view', controller.viewAllArtists);
artistsRouter.get('/viewCreate', controller.viewCreateArtist);

export default artistsRouter;
