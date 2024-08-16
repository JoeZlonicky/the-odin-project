import pool from '../pool.js';

export async function insertSong(name, lengthSeconds, genreIds, artistIds) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    const { rows } = await client.query('INSERT INTO songs (name, length_seconds) VALUES ($1, $2) RETURNING *', [
      name,
      lengthSeconds,
    ]);

    const id = rows[0].id;

    for (const genreId of genreIds) {
      await client.query('INSERT INTO song_genres VALUES ($1, $2)', [id, genreId]);
    }

    for (const artistId of artistIds) {
      await client.query('INSERT INTO song_artists VALUES ($1, $2)', [id, artistId]);
    }

    await client.query('COMMIT');

    return rows.length > 0 ? rows[0] : null;
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

export async function selectAllSongs() {
  const { rows } = await pool.query('SELECT * FROM songs');
  return rows;
}

export async function selectSong(id) {
  const { rows } = await pool.query('SELECT * FROM songs WHERE id = $1', [id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function selectSongGenres(id) {
  const { rows } = await pool.query(
    'SELECT genres.id AS id, genres.name AS name FROM songs INNER JOIN song_genres ON songs.id = song_id INNER JOIN genres ON genres.id = genre_id WHERE songs.id = $1',
    [id],
  );
  return rows;
}

export async function selectSongArtists(id) {
  const { rows } = await pool.query(
    'SELECT artists.id AS id, artists.name AS name FROM songs INNER JOIN song_artists ON songs.id = song_id INNER JOIN artists ON artists.id = artist_id WHERE songs.id = $1',
    [id],
  );
  return rows;
}

export async function updateSong(id, name, lengthSeconds, genreIds, artistIds) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    const { rows } = await pool.query('UPDATE songs SET name = $1, length_seconds = $2 WHERE id = $3 RETURNING *', [
      name,
      lengthSeconds,
      id,
    ]);

    await client.query('DELETE FROM song_genres WHERE song_id = $1 AND genre_id <> ANY ($2::int[])', [id, genreIds]);
    await client.query('DELETE FROM song_artists WHERE song_id = $1 AND artist_id <> ANY ($2::int[])', [id, genreIds]);

    for (const genreId of genreIds) {
      await client.query('INSERT INTO song_genres VALUES ($1, $2) ON CONFLICT DO NOTHING', [id, genreId]);
    }

    for (const artistId of artistIds) {
      await client.query('INSERT INTO song_artists VALUES ($1, $2) ON CONFLICT DO NOTHING', [id, artistId]);
    }

    await client.query('COMMIT');

    return rows.length > 0 ? rows[0] : null;
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

export async function deleteSong(id) {
  const { rows } = await pool.query('DELETE FROM songs WHERE id = $1 RETURNING *', [id]);
  return rows.length > 0 ? rows[0] : null;
}
