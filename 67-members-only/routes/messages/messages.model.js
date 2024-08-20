import { dbPool } from '../../db/dbPool.js';

async function getAll() {
  const { rows } = await dbPool.query('SELECT * from messages');
  return rows;
}

async function getById(id) {
  const { rows } = await dbPool.query('SELECT * FROM messages WHERE id = $1', [id]);
  return rows[0];
}

export const Messages = { getAll, getById };
