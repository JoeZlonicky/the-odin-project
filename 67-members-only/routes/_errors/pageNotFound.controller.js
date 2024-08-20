function get(_req, res) {
  res.status(404).render('_errors/pageNotFound');
}

export const pageNotFound = { get };
