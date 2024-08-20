import { dbPool } from '../../db/dbPool.js';

async function getById(id) {
  const { rows } = await dbPool.query(
    `
    SELECT * FROM users
    WHERE id = $1`,
    [id],
  );
  return rows[0];
}

async function getByUsername(username) {
  const { rows } = await dbPool.query(
    `
    SELECT * FROM users
    WHERE username = $1`,
    [username],
  );
  return rows[0];
}

async function getAll() {
  const { rows } = await dbPool.query('SELECT * FROM users');
  return rows;
}

async function getUserMessages(id) {
  const { rows } = await dbPool.query(
    `SELECT messages.* 
    FROM users JOIN messages ON users.id = messages.user_id
    WHERE users.id = $1`,
    [id],
  );
  return rows;
}

async function insert(username, password, firstName, lastName, isMember, isAdmin) {
  const { rows } = await dbPool.query(
    `INSERT INTO users (username, password, first_name, last_name, is_member, is_admin) 
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
    [username, password, firstName, lastName, isMember, isAdmin],
  );
  return rows[0];
}

export const Users = { getById, getByUsername, getUserMessages, getAll, insert };
