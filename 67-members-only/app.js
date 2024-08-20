import 'dotenv/config.js';
import express from 'express';
import methodOverride from 'method-override';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { configurePassport } from './config/configurePassport.js';
import { authMiddleware } from './middleware/authMiddleware.js';
import { ejsMiddleware } from './middleware/ejsMiddleware.js';
import { indexRouter } from './routes/index.router.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const viewsPath = join(__dirname, 'routes');
const partialsPath = join(__dirname, 'routes', '_partials');
const publicPath = join(__dirname, 'public');

const app = express();

// Set up EJS
app.set('views', [viewsPath, partialsPath]);
app.set('view engine', 'ejs');

// Initial passport configuration
configurePassport();

// Middleware
app.use(authMiddleware);
app.use(ejsMiddleware);
app.use(express.static(publicPath));
app.use(methodOverride('_method')); // For using different HTTP verbs with form submissions
app.use(express.urlencoded({ extended: true })); // Body parsing for form submissions

// Routing
app.use(indexRouter);

// Listen!
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Open at http://localhost:${PORT}`);
});
