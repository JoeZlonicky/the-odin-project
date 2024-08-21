import asyncHandler from 'express-async-handler';
import { UnauthorizedController } from '../../_errors/unauthorized/unauthorized.controller.js';
import { Users } from '../users.model.js';

const post = asyncHandler(async (req, res) => {
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

export const AdminController = { post };
