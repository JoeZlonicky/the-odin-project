import { UnauthorizedController } from '../../_errors/unauthorized/unauthorized.controller.js';

function get(req, res) {
  if (!req.user) {
    UnauthorizedController.get(req, res);
    return;
  }
  res.render('messages/new-message/newMessage');
}

export const NewMessageController = { get };
