#! /usr/bin/env node
import 'dotenv/config.js';
import pg from 'pg';

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR (255),
  datetime TIMESTAMP WITH TIME ZONE,
  body TEXT
);

DELETE FROM messages;

INSERT INTO messages (author, datetime, body)
VALUES
  ('The Void', CURRENT_TIMESTAMP, 'Hello, world!')
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
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
