import asyncHandler from 'express-async-handler';
import { Messages } from './messages/messages.model.js';

function read(_req, res) {
  return res.redirect('/view');
}

const view = asyncHandler(async (_req, res) => {
  const messages = await Messages.getAll();
  return res.render('index', { messages: messages });
});

export const index = { read, view };
