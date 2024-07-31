import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import formsRouter from './routes/formsRoutes.js';
import messagesRouter from './routes/messagesRoutes.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsPath = join(__dirname, 'public');
const viewsPath = join(__dirname, 'views');

// Use EJS templates
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// Serve public files (e.g. CSS)
app.use(express.static(assetsPath));

// For posting new messages
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/messages', messagesRouter);
app.use('/new', formsRouter);
app.use('/', (_req, res) => res.redirect('messages'));

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Open at http://localhost:${PORT}`));
