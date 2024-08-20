import asyncHandler from 'express-async-handler';
import { Messages } from './messages.model.js';

const get = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const message = await Messages.getById(id);
  console.log(message);
  if (!message) {
    res.status(404).render('messages/views/messageNotFound');
    return;
  }

  res.render('messages/views/message', { message: message });
});

export const MessagesController = { get };
