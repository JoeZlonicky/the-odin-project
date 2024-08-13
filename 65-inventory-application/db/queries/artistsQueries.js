import pool from '../pool.js';

export async function getAllArtists() {
  const { rows } = await pool.query('SELECT * FROM artists');
  return rows;
}
