function get(_req, res) {
  res.status(401).render('_errors/unathorized/unauthorized');
}

export const UnauthorizedController = { get };
