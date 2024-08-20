function get(_req, res) {
  res.status(401).render('_errors/unauthorizedError');
}

export const UnauthorizedController = { get };
