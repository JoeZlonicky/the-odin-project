import 'dotenv/config.js';
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import usernamesRouter from './routes/usernamesRouter.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
const viewsPath = join(__dirname, 'views');

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(usernamesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Open at http://localhost:${PORT}`);
});
