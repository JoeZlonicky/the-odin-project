import pool from '../pool.js';

export async function insertArtist(name) {
  const { rows } = await pool.query('INSERT INTO artists (name) VALUES ($1) RETURNING *', [name]);
  return rows.length > 0 ? rows[0] : null;
}

export async function selectAllArtists() {
  const { rows } = await pool.query('SELECT * FROM artists');
  return rows;
}

export async function selectArtist(id) {
  const { rows } = await pool.query('SELECT * FROM artists WHERE id = $1', [id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function selectSongsByArtist(id) {
  const { rows } = await pool.query(
    `SELECT songs.id AS id, songs.name AS name
      FROM songs INNER JOIN song_artists ON songs.id = song_id
      INNER JOIN artists ON artists.id = artist_id
      WHERE artists.id = $1`,
    [id],
  );
  return rows;
}

export async function selectGenresOfArtist(id) {
  const { rows } = await pool.query(
    `SELECT DISTINCT genres.id AS id, genres.name AS name 
      FROM genres INNER JOIN song_genres ON genres.id = song_genres.genre_id 
      INNER JOIN songs ON songs.id = song_genres.song_id
      INNER JOIN song_artists ON songs.id = song_artists.song_id
      INNER JOIN artists ON artists.id = song_artists.artist_id
      WHERE artists.id = $1`,
    [id],
  );
  return rows;
}

export async function updateArtist(id, name) {
  const { rows } = await pool.query('UPDATE artists SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function deleteArtist(id) {
  const { rows } = await pool.query('DELETE FROM artists WHERE id = $1 RETURNING *', [id]);
  return rows.length > 0 ? rows[0] : null;
}
