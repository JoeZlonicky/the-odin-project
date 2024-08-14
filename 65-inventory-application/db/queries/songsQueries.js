import pool from '../pool.js';

export async function insertSong(name, lengthSeconds) {
  const { rows } = await pool.query('INSERT INTO songs (name, length_seconds) VALUES ($1, $2) RETURNING *', [
    name,
    lengthSeconds,
  ]);
  return rows.length > 0 ? rows[0] : null;
}

export async function selectAllSongs() {
  const { rows } = await pool.query('SELECT * FROM songs');
  return rows;
}

export async function selectSong(id) {
  const { rows } = await pool.query('SELECT * FROM songs WHERE id = $1', [id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function selectSongArtists(id) {
  const { rows } = await pool.query(
    'SELECT artists.id AS id, artists.name AS name FROM songs INNER JOIN song_artists ON songs.id = song_id INNER JOIN artists ON artists.id = artist_id WHERE songs.id = $1',
    [id],
  );
  return rows;
}

export async function updateSong(id, name, lengthSeconds) {
  const { rows } = await pool.query('UPDATE songs SET name = $1, length_seconds = $2 WHERE id = $3 RETURNING *', [
    name,
    lengthSeconds,
    id,
  ]);
  return rows.length > 0 ? rows[0] : null;
}

export async function deleteSong(id) {
  const { rows } = await pool.query('DELETE FROM songs WHERE id = $1 RETURNING *', [id]);
  return rows.length > 0 ? rows[0] : null;
}
