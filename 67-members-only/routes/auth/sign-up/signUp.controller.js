import asyncHandler from 'express-async-handler';
import { hashPassword } from '../../../auth/hashPassword.js';
import { dbPool } from '../../../db/dbPool.js';

function get(_req, res) {
  res.redirect('/auth/sign-up/view');
}

function view(_req, res) {
  res.render('auth/sign-up/signUp');
}

const post = asyncHandler(async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  const { rows } = await dbPool.query(
    'INSERT INTO users (username, password, first_name, last_name, is_member, is_admin) VALUES ($1, $2, $3, $4, FALSE, FALSE) RETURNING *',
    [req.body.username, hashedPassword, req.body.firstName, req.body.lastName],
  );
  const user = rows[0];
  await req.promiseLogIn(user);
  res.redirect('/');
});

export { get, view, post };
