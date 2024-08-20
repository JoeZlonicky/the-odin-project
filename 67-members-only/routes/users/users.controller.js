import asyncHandler from 'express-async-handler';
import { NotAMemberController } from '../_errors/notAMembercontroller.js';
import { PageNotFoundController } from '../_errors/pageNotFound.controller.js';
import { UnauthorizedController } from '../_errors/unauthorizedError.controller.js';
import { Users } from './users.model.js';

const get = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    UnauthorizedController.get(req, res);
  }

  const id = parseInt(req.params.id);
  if (user.id === id) {
    const messages = await Users.getUserMessages(id);
    res.render('users/_views/myProfile', { messages: messages });
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

  res.render('users/_views/otherProfile', { otherUser });
});

export const UsersController = { get };
