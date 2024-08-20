import asyncHandler from 'express-async-handler';
import { Messages } from './messages/messages.model.js';

const get = asyncHandler(async (_req, res) => {
  const messages = await Messages.getAll();
  return res.render('index', { messages: messages });
});

export const index = { get };