import bcrypt from 'bcryptjs';
import LocalStrategy from 'passport-local';
import { dbPool } from '../db/dbPool.js';

const localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const { rows } = await dbPool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = rows[0];

    if (!user) {
      return done(null, false, { message: 'Incorrect username' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, { message: 'Incorrect password' });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

function serializeUser(user, done) {
  done(null, user.id);
}

async function deserializeUser(id, done) {
  try {
    const { rows } = await dbPool.query('SELECT * FROM users WHERE id = $1', [id]);
    const user = rows[0];
    done(null, user);
  } catch (err) {
    done(err);
  }
}

export { localStrategy, serializeUser, deserializeUser };
