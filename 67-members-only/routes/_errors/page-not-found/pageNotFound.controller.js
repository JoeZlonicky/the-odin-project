function get(_req, res) {
  res.status(404).render('_errors/page-not-found/pageNotFound');
}

export const PageNotFoundController = { get };
