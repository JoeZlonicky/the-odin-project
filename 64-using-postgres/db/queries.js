import pool from './pool.js';

export async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}

export async function getUsernamesWithSearch(search) {
  const { rows } = await pool.query('SELECT * FROM usernames WHERE username LIKE $1', [`%${search}%`]);
  return rows;
}

export async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

export async function deleteUsernames() {
  const { rows } = await pool.query('DELETE from usernames RETURNING *');
  return rows;
}
