import { dbPool } from '../../db/dbPool.js';

async function getAll() {
  const { rows } = await dbPool.query(`SELECT * from messages`);
  return rows;
}

export const Messages = { getAll };
