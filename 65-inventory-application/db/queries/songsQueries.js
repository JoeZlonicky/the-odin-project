import pool from '../pool.js';

export async function getAllSongs() {
  const { rows } = await pool.query('SELECT * FROM songs');
  return rows;
}
