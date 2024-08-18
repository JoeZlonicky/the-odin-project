import connectPgSimple from 'connect-pg-simple';
import 'dotenv/config.js';
import express from 'express';
import session from 'express-session';
import methodOverride from 'method-override';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import passport from 'passport';
import { deserializeUser, localStrategy, serializeUser } from './auth/localStrategy.js';
import { promisifyPassport } from './auth/promisifyPassport.js';
import { dbPool } from './db/dbPool.js';
import { indexRouter } from './routes/index.router.js';

const app = express();

// Authentication
app.use(promisifyPassport);
passport.use(localStrategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

const Store = connectPgSimple(session);
app.use(
  session({
    store: new Store({
      pool: dbPool,
      tableName: 'sessions',
      createTableIfMissing: true,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  }),
);
app.use(passport.session());

// For using .view.ejs file extension without having to specify when calling render
const expressRender = express.response.render;
express.response.render = function (view, options, callback) {
  expressRender.call(this, view + '.view.ejs', options, callback);
};

// Serving static files (e.g. CSS)
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = join(__dirname, 'public');
app.use(express.static(publicPath));

// Set up EJS
const viewsPath = join(__dirname, 'routes');
const partialsPath = join(__dirname, 'routes', '_partials');
app.set('views', [viewsPath, partialsPath]);
app.set('view engine', 'ejs');

// Set EJS locals
app.use((req, res, next) => {
  res.locals.siteName = 'The Forum';
  res.locals.user = req.user;
  next();
});

// For using different HTTP verbs with form submissions
app.use(methodOverride('_method'));

// Body parsing for form submissions
app.use(express.urlencoded({ extended: true }));

// Nests all routes
app.use(indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Open at http://localhost:${PORT}`);
});
