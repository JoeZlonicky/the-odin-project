import asyncHandler from 'express-async-handler';
import { Messages } from './messages.model.js';

const get = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const message = await Messages.getById(id);

  if (!message) {
    res.status(404).render('messages/views/messageNotFound');
    return;
  }

  res.render('messages/views/message', { message: message });
});

const post = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    res.status(401).render('_errors/unauthorizedError');
  }

  const { title, body } = req.body;
  Messages.post(user.id, title, body);
  res.redirect('/');
});

function getCreateForm(_req, res) {
  res.render('messages/views/newMessage');
}

export const MessagesController = { get, getCreateForm, post };
