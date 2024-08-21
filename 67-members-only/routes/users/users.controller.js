import asyncHandler from 'express-async-handler';
import { validationResult } from 'express-validator';
import { hashPassword } from '../../auth/hashPassword.js';
import { NotAMemberController } from '../_errors/not-a-member/notAMember.controller.js';
import { PageNotFoundController } from '../_errors/page-not-found/pageNotFound.controller.js';
import { UnauthorizedController } from '../_errors/unauthorized/unauthorized.controller.js';
import { Users } from './users.model.js';
import { validateUser } from './users.validation.js';

const get = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    UnauthorizedController.get(req, res);
  }

  const id = parseInt(req.params.id);
  if (user.id === id) {
    const messages = await Users.getUserMessages(id);
    res.render('users/_views/myProfile', { messages });
    return;
  }
  if (!user.is_member) {
    NotAMemberController.get(req, res);
    return;
  }

  const otherUser = await Users.getById(id);
  if (!otherUser) {
    PageNotFoundController.get(req, res);
    return;
  }

  const messages = await Users.getUserMessages(id);
  res.render('users/_views/otherProfile', { otherUser, messages });
});

const post = [
  validateUser,
  asyncHandler(async (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('users/sign-up/signUp', { errors: errors.array(), username, firstName, lastName });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const user = await Users.insert(username, hashedPassword, firstName, lastName, false, false);

    await req.promiseLogIn(user);
    res.redirect('/');
  }),
];

export const UsersController = { get, post };
