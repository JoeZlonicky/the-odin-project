import passport from 'passport';
import { deserializeUser } from '../auth/deserializeUser.js';
import { localStrategy } from '../auth/localStrategy.js';
import { serializeUser } from '../auth/serializeUser.js';

function configurePassport() {
  passport.use(localStrategy);
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
}

export { configurePassport };
