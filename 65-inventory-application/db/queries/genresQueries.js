import pool from '../pool.js';

export async function getAllGenres() {
  const { rows } = await pool.query('SELECT * FROM genres');
  return rows;
}
