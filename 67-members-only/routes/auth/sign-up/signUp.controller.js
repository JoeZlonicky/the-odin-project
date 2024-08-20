import asyncHandler from 'express-async-handler';
import { hashPassword } from '../../../auth/hashPassword.js';
import { Users } from '../../users/users.model.js';

const existingUsernameMessage = 'That username is already in use';

function get(_req, res) {
  res.render('auth/sign-up/signUp');
}

const post = asyncHandler(async (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  const existingUser = await Users.getByUsername(username);
  if (existingUser) {
    res.render('auth/sign-up/signUp', { error: existingUsernameMessage, username, firstName, lastName });
    return;
  }

  const hashedPassword = await hashPassword(password);
  const user = await Users.insert(username, hashedPassword, firstName, lastName, false, false);

  await req.promiseLogIn(user);
  res.redirect('/');
});

export const signUp = { get, post };
