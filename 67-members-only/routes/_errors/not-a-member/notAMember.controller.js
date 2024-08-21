function get(_req, res) {
  res.status(403).render('_errors/not-a-member/notAMember');
}

export const NotAMemberController = { get };
