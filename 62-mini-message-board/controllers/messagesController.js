const messages = [
  {
    text: 'Hello, world!',
    user: 'Programmer42',
    added: new Date(),
  },
  {
    text: 'test',
    user: 'testUser76',
    added: new Date(),
  },
];

export function getAll(_req, res) {
  return res.render('messageBoard', { messages: messages });
}

export function getMessage(req, res) {
  return res.render('message', { message: req.body.id });
}

export function postMessage(req, res) {
  console.log('Received new message!');
  return res.redirect('/messages');
}
