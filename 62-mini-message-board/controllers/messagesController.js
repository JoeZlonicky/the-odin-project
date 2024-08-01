import { format } from 'date-fns';

let messageCounter = 1;

const messages = [
  {
    body: 'Hello, world!',
    author: 'The Developer',
    date: new Date(),
    id: messageCounter++,
  },
];

export function getAll(_req, res) {
  return res.render('messageBoard', { messages: messages, dateformat: (date) => format(date, 'yyyy/MM/dd - h:mmaa') });
}

export function getMessage(req, res) {
  const id = parseInt(req.params?.id);
  const message = messages.find((m) => m.id === id);

  if (message === undefined) {
    return res.status(404).send({ message: 'Message not found' });
  }

  return res.render('message', { message: message, dateformat: (date) => format(date, 'yyyy/MM/dd - h:mmaa') });
}

export function postMessage(req, res) {
  const t = new Date();
  let message = `[${format(t, 'HH:mm:ss')}]`;

  if (req.body?.messageAuthor) {
    message += ` [Author: ${req.body.messageAuthor}]:`;
  } else {
    message += ' [ERROR]: Missing message author';
    console.log(message);
    return res.status(400).send({ message: 'Missing author' });
  }

  if (req.body?.messageBody) {
    message += ` ${req.body.messageBody}`;
  } else {
    message += ' [ERROR]: Missing message body';
    console.log(message);
    return res.status(400).send({ message: 'Missing body' });
  }

  console.log(message);

  messages.push({
    body: req.body.messageBody,
    author: req.body.messageAuthor,
    date: t,
    id: messageCounter++,
  });

  return res.redirect('/messages');
}
