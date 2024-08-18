function get(_req, res) {
  res.redirect('/auth/log-in/view');
}

function view(_req, res) {
  res.render('auth/log-in/logIn');
}

function post(_req, res) {
  res.redirect('/');
}

export { get, view, post };
