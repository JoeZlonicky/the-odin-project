import { dbPool } from '../../db/dbPool.js';

async function getAll(descendingTimestamp = false) {
  let query = `SELECT messages.*, username 
    FROM messages JOIN users 
    ON messages.user_id = users.id`;

  if (descendingTimestamp) {
    query += ' ORDER BY timestamp DESC';
  }

  const { rows } = await dbPool.query(query);
  return rows;
}

async function getById(id) {
  const { rows } = await dbPool.query(
    `SELECT messages.*, username 
    FROM messages JOIN users 
    ON messages.user_id = users.id WHERE messages.id = $1`,
    [id],
  );
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
