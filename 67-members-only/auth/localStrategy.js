import bcrypt from 'bcryptjs';
import LocalStrategy from 'passport-local';
import { Users } from '../routes/users/users.model.js';

const localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await Users.getByUsername(username);
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
    const user = await Users.getById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
}

export { localStrategy, serializeUser, deserializeUser };
