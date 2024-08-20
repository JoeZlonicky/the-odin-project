import bcrypt from 'bcryptjs';
import LocalStrategy from 'passport-local';
import { Users } from '../routes/users/users.model.js';

const incorrectUsernameMessage = 'Invalid username';
const correctUsernameMessage = 'Invalid password';

const localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    // Check username
    const user = await Users.getByUsername(username);
    if (!user) {
      return done(null, false, { message: incorrectUsernameMessage });
    }

    // Check password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, { message: correctUsernameMessage });
    }

    // Authenticated
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export { localStrategy };
