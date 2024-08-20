import asyncHandler from 'express-async-handler';
import { PageNotFoundController } from '../_errors/pageNotFound.controller.js';
import { UnauthorizedController } from '../_errors/unauthorizedError.controller.js';
import { Messages } from './messages.model.js';

const get = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const message = await Messages.getById(id);

  if (!message) {
    PageNotFoundController.get(req, res);
    return;
  }

  res.render('messages/views/message', { message: message });
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

function getCreateForm(req, res) {
  if (!req.user) {
    UnauthorizedController.get(req, res);
    return;
  }
  res.render('messages/views/newMessage');
}

export const MessagesController = { get, getCreateForm, post };
