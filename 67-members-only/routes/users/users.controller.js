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

const updateToMember = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    UnauthorizedController.get(req, res);
    return;
  }

  const { password } = req.body;
  if (password !== process.env.MEMBER_PASSWORD || user.is_member) {
    const messages = await Users.getUserMessages(user.id);
    res.render('users/_views/myProfile', { messages: messages, memberPasswordError: 'Invalid' });
    return;
  }

  await Users.updateToMember(user.id);
  res.redirect(`/users/${user.id}`);
});

const updateToAdmin = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    UnauthorizedController.get(req, res);
    return;
  }

  const { password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD || user.is_admin) {
    const messages = await Users.getUserMessages(user.id);
    res.render('users/_views/myProfile', { messages: messages, adminPasswordError: 'Invalid' });
    return;
  }

  await Users.updateToAdmin(user.id);
  res.redirect(`/users/${user.id}`);
});

export const UsersController = { get, updateToMember, updateToAdmin };
