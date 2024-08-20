import connectPgSimple from 'connect-pg-simple';
import session from 'express-session';
import { dbPool } from '../db/dbPool.js';

const Store = connectPgSimple(session);

const sessionConfig = {
  store: new Store({
    pool: dbPool,
    tableName: 'sessions',
    createTableIfMissing: true,
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
};

export { sessionConfig };
