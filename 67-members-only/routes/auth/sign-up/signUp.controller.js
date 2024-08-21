import asyncHandler from 'express-async-handler';
import { validationResult } from 'express-validator';
import { hashPassword } from '../../../auth/hashPassword.js';
import { Users } from '../../users/users.model.js';
import { validateUser } from '../../users/users.validation.js';

function get(_req, res) {
  res.render('auth/sign-up/signUp');
}

const post = [
  validateUser,
  asyncHandler(async (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('auth/sign-up/signUp', { errors: errors.array(), username, firstName, lastName });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const user = await Users.insert(username, hashedPassword, firstName, lastName, false, false);

    await req.promiseLogIn(user);
    res.redirect('/');
  }),
];

export const SignUpController = { get, post };
