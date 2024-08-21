function get(_req, res) {
  res.status(403).render('_errors/not-an-admin/notAnAdmin');
}

export const NotAnAdminController = { get };
