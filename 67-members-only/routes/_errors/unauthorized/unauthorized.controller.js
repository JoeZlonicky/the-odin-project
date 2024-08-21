function get(_req, res) {
  res.status(401).render('_errors/unauthorized/unauthorized');
}

export const UnauthorizedController = { get };
