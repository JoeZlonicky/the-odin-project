import { dbPool } from '../../db/dbPool.js';

async function getAll(descendingTimestamp = false) {
  let rows = [];

  if (descendingTimestamp) {
    ({ rows } = await dbPool.query('SELECT * from messages ORDER BY timestamp DESC'));
  } else {
    ({ rows } = await dbPool.query('SELECT * from messages'));
  }

  return rows;
}

async function getById(id) {
  const { rows } = await dbPool.query('SELECT * FROM messages WHERE id = $1', [id]);
  return rows[0];
}

async function post(userId, title, body) {
  const { rows } = await dbPool.query(
    `INSERT INTO messages(user_id, title, timestamp, body)
    VALUES ($1, $2, CURRENT_TIMESTAMP, $3) RETURNING *`,
    [userId, title, body],
  );
  return rows[0];
}

export const Messages = { getAll, getById, post };
