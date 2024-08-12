#! /usr/bin/env node
import 'dotenv/config.js';
import pg from 'pg';

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255)
);

INSERT INTO usernames (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');

`;

async function main() {
  console.log('Populating database...');

  let client;
  try {
    client = new pg.Client();
    await client.connect();
  } catch (err) {
    console.error('Failed to connect to database');
    console.error(err);
    return;
  }

  try {
    await client.query(SQL);
    console.log('Done!');
  } catch (err) {
    console.error('Failed to perform query');
    console.err(err);
  } finally {
    await client.end();
  }
}

main();
