import pool from '../pool.js';

export async function insertGenre(name) {
  const { rows } = await pool.query('INSERT INTO genres (name) VALUES ($1) RETURNING *', [name]);
  return rows.length > 0 ? rows[0] : null;
}

export async function selectAllGenres() {
  const { rows } = await pool.query('SELECT * FROM genres');
  return rows;
}

export async function selectGenre(id) {
  const { rows } = await pool.query('SELECT * FROM genres WHERE id = $1', [id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function selectArtistsOfGenre(id) {
  const { rows } = await pool.query(
    `SELECT DISTINCT artists.id AS id, artists.name AS name 
      FROM genres INNER JOIN song_genres ON genres.id = song_genres.genre_id 
      INNER JOIN songs ON songs.id = song_genres.song_id
      INNER JOIN song_artists ON songs.id = song_artists.song_id
      INNER JOIN artists ON artists.id = song_artists.artist_id
      WHERE genres.id = $1`,
    [id],
  );
  return rows;
}

export async function selectSongsOfGenre(id) {
  const { rows } = await pool.query(
    `SELECT songs.id AS id, songs.name AS name 
      FROM genres INNER JOIN song_genres ON genres.id = song_genres.genre_id 
      INNER JOIN songs ON songs.id = song_genres.song_id
      WHERE genres.id = $1`,
    [id],
  );
  return rows;
}

export async function updateGenre(id, name) {
  const { rows } = await pool.query('UPDATE genres SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function deleteGenre(id) {
  const { rows } = await pool.query('DELETE FROM genres WHERE id = $1 RETURNING *', [id]);
  return rows.length > 0 ? rows[0] : null;
}
