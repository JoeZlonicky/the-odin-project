function get(_req, res) {
  res.status(403).render('_errors/notAMember');
}

export const NotAMemberController = { get };
