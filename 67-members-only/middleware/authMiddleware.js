import session from 'express-session';
import passport from 'passport';
import { sessionConfig } from '../config/sessionConfig.js';
import { promisifyPassport } from './promisifyPassport.js';

const authMiddleware = [promisifyPassport, session(sessionConfig), passport.session()];

export { authMiddleware };
