#! /usr/bin/env node
import 'dotenv/config.js';
import pg from 'pg';

const SQL = `
CREATE TABLE IF NOT EXISTS artists (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255) NOT NULL
);

INSERT INTO artists (name)
VALUES
  ('Taylor Swift'),
  ('Kygo'),
  ('Ava Max'),
  ('Gregory Alan Isakov')
;

CREATE TABLE IF NOT EXISTS genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255) NOT NULL
);

INSERT INTO genres (name)
VALUES
  ('Pop'),
  ('Electronic'),
  ('Folk')
;

CREATE TABLE IF NOT EXISTS songs (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255) NOT NULL,
  length_seconds INTEGER CHECK (length_seconds > 0)
);

INSERT INTO songs (name, length_seconds)
VALUES
  ('Wildest Dreams', 220),
  ('Whatever', 178),
  ('Light Year', 218)
;

CREATE TABLE IF NOT EXISTS song_genres (
  song_id INTEGER REFERENCES songs (id) NOT NULL,
  genre_id INTEGER REFERENCES genres (id) NOT NULL,
  PRIMARY KEY(song_id, genre_id)
);

INSERT INTO song_genres VALUES
  (1, 1),
  (2, 1),
  (2, 2),
  (3, 3)
;

CREATE TABLE IF NOT EXISTS song_artists (
  song_id INTEGER REFERENCES songs (id) NOT NULL,
  artist_id INTEGER REFERENCES artists (id) NOT NULL,
  PRIMARY KEY(song_id, artist_id)
);

INSERT INTO song_artists VALUES
  (1, 1),
  (2, 2),
  (2, 3),
  (3, 4)
;
`;

async function main() {
  console.log('Connecting to database...');

  let client;
  try {
    client = new pg.Client();
    await client.connect();
  } catch (err) {
    console.error('Failed to connect to database');
    console.error(err);
    return;
  }

  console.log('Populating database...');
  try {
    await client.query(SQL);
    console.log('Done!');
  } catch (err) {
    console.error('Failed to perform query');
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
