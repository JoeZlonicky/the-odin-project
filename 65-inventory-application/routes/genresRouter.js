import { Router } from 'express';
import * as controller from '../controllers/genresController.js';

const genresRouter = Router();

genresRouter.get('/', controller.getGenres);

genresRouter.get('/view', controller.viewGenres);

export default genresRouter;
