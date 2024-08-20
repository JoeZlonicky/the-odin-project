import { Users } from '../routes/users/users.model.js';

async function deserializeUser(id, done) {
  try {
    const user = await Users.getById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
}

export { deserializeUser };
