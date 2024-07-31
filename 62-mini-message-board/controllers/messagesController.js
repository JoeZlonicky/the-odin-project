const messages = [
  {
    text: 'Hello, world!',
    author: 'Programmer42',
    date: new Date(),
  },
  {
    text: 'test',
    author: 'testUser76',
    date: new Date(),
  },
];

export function getAll(_req, res) {
  return res.render('messageBoard', { messages: messages });
}

export function getMessage(req, res) {
  return res.render('message', { message: req.body.id });
}

export function postMessage(req, res) {
  const t = new Date();
  let message = `[${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}]`;

  if (req.body?.messageAuthor) {
    message += ` [${req.body.messageAuthor}]:`;
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
    text: req.body.messageBody,
    author: req.body.messageAuthor,
    date: t,
  });

  return res.redirect('/messages');
}
