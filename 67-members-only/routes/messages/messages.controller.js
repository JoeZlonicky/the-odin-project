import { format } from 'date-fns';
import asyncHandler from 'express-async-handler';
import { validationResult } from 'express-validator';
import { NotAnAdminController } from '../_errors/not-an-admin/notAnAdmin.controller.js';
import { PageNotFoundController } from '../_errors/page-not-found/pageNotFound.controller.js';
import { UnauthorizedController } from '../_errors/unauthorized/unauthorized.controller.js';
import { Messages } from './messages.model.js';
import { validateMessage } from './messages.validation.js';

const get = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const message = await Messages.getById(id);

  if (!message) {
    PageNotFoundController.get(req, res);
    return;
  }

  res.render('messages/message', {
    message: message,
    datetimeFormat: (datetime) => format(datetime, 'yyyy/MM/dd - h:mmaa'),
  });
});

const post = [
  validateMessage,
  asyncHandler(async (req, res) => {
    const user = req.user;
    if (!user) {
      UnauthorizedController.get(req, res);
      return;
    }

    const { title, body } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('messages/new-message/newMessage', { errors: errors.array(), title, body });
      return;
    }

    Messages.post(user.id, title, body);
    res.redirect('/');
  }),
];

const remove = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    UnauthorizedController.get(req, res);
    return;
  }

  const id = req.params.id;
  const message = await Messages.getById(id);
  if (!user.is_admin && message && message.user_id !== user.id) {
    NotAnAdminController.get(req, res);
    return;
  }

  if (!message) {
    PageNotFoundController.get(req, res);
    return;
  }

  await Messages.deleteById(id);
  res.redirect('/');
});

export const MessagesController = { get, post, remove };
