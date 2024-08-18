function read(_req, res) {
  return res.redirect('/view');
}

function view(_req, res) {
  return res.render('index');
}

export { read, view };
