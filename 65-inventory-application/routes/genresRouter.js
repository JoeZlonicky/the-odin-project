import { Router } from 'express';
import * as controller from '../controllers/genresController.js';

const genresRouter = Router();

genresRouter.get('/:id(\\d+)', controller.readGenre);
genresRouter.post('/:id(\\d+)', controller.updateGenre);
genresRouter.delete('/:id(\\d+)', controller.deleteGenre);
genresRouter.get('/:id(\\d+)/view', controller.viewGenre);
genresRouter.get('/:id(\\d+)/viewUpdate', controller.viewUpdateGenre);

genresRouter.post('/', controller.createGenre);
genresRouter.get('/', controller.readAllGenres);
genresRouter.get('/view', controller.viewAllGenres);
genresRouter.get('/viewCreate', controller.viewCreateGenre);

export default genresRouter;
