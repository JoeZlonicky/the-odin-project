function read(_req, res) {
  return res.redirect('/view');
}

function view(req, res) {
  return res.render('index');
}

export const index = { read, view };
