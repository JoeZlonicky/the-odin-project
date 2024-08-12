import { format } from 'date-fns';
import asyncHandler from 'express-async-handler';
import * as q from '../db/queries.js';

export const getAll = asyncHandler(async (_req, res) => {
  const messages = await q.getAllMessages();
  return res.render('messageBoard', {
    messages: messages,
    datetimeFormat: (datetime) => format(datetime, 'yyyy/MM/dd - h:mmaa'),
  });
});

export const getMessage = asyncHandler(async (req, res) => {
  const id = parseInt(req.params?.id);
  const message = await q.getMessage(id);

  if (!message) {
    return res.status(404).send({ message: 'Message not found' });
  }

  return res.render('message', { message: message, dateformat: (date) => format(date, 'yyyy/MM/dd - h:mmaa') });
});

export const postMessage = asyncHandler(async (req, res) => {
  if (!req.body?.messageAuthor) {
    return res.status(400).send({ message: 'Missing author' });
  }

  if (!req.body?.messageBody) {
    return res.status(400).send({ message: 'Missing body' });
  }

  const t = new Date();
  await q.insertMessage(req.body.messageAuthor, t, req.body.messageBody);

  return res.redirect('/messages');
});
