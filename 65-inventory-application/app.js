import 'dotenv/config.js';
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import artistsRouter from './routes/artistsRouter.js';
import genresRouter from './routes/genresRouter.js';
import indexRouter from './routes/indexRouter.js';
import songsRouter from './routes/songsRouter.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
const viewsPath = join(__dirname, 'views');

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/artists', artistsRouter);
app.use('/genres', genresRouter);
app.use('/songs', songsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Open at http://localhost:${PORT}`);
});
