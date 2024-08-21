import { format } from 'date-fns';
import asyncHandler from 'express-async-handler';
import { PageNotFoundController } from '../_errors/page-not-found/pageNotFound.controller.js';
import { UnauthorizedController } from '../_errors/unauthorized/unauthorized.controller.js';
import { Messages } from './messages.model.js';

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

const post = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    UnauthorizedController.get(req, res);
    return;
  }

  const { title, body } = req.body;
  Messages.post(user.id, title, body);
  res.redirect('/');
});

export const MessagesController = { get, post };
