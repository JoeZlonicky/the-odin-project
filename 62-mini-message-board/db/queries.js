import pool from './pool.js';

export async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages ORDER BY datetime DESC');
  return rows;
}

export async function getMessage(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
  if (rows.length === 0) return null;
  return rows[0];
}

export async function insertMessage(author, datetime, body) {
  await pool.query('INSERT INTO messages (author, datetime, body) VALUES ($1, $2, $3)', [author, datetime, body]);
}
