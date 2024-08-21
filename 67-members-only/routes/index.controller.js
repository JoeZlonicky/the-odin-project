import { format } from 'date-fns';
import asyncHandler from 'express-async-handler';
import { Messages } from './messages/messages.model.js';
import { Users } from './users/users.model.js';

const get = asyncHandler(async (_req, res) => {
  const [messages, users] = await Promise.all([Messages.getAll(true), Users.getAll()]);
  return res.render('index', {
    messages: messages,
    users: users,
    datetimeFormat: (datetime) => format(datetime, 'yyyy/MM/dd - h:mmaa'),
  });
});

export const IndexController = { get };
