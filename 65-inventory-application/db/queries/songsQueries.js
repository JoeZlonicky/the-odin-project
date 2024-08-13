import pool from '../pool.js';

export async function getAllSongs() {
  const { rows } = await pool.query('SELECT * FROM songs');
  return rows;
}

export async function getSong(id) {
  const { rows } = await pool.query('SELECT * FROM songs WHERE id = $1', [id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function deleteSong(id) {
  const { rows } = await pool.query('DELETE FROM songs WHERE id = $1 RETURNING *', [id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function updateSong(id, name) {
  const { rows } = await pool.query('UPDATE songs SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function getSongArtists(id) {
  const { rows } = await pool.query(
    'SELECT artists.id AS id, artists.name AS name FROM songs INNER JOIN song_artists ON songs.id = song_id INNER JOIN artists ON artists.id = artist_id WHERE songs.id = $1',
    [id],
  );
  return rows;
}
