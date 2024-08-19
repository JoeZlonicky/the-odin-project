#!/usr/bin/env node
import 'dotenv/config.js';
import pg from 'pg';

const CREATE_TABLES = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  is_member BOOLEAN NOT NULL,
  is_admin BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title TEXT CHECK (LENGTH(title) > 0),
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
  body TEXT
);
`;

const TRUNCATE = `
  TRUNCATE users CASCADE;
`;

async function populateDb() {
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
    let query = CREATE_TABLES;
    if (process.argv[2] === 'truncate') {
      query += TRUNCATE;
    }
    await client.query(query);
    console.log('Done!');
  } catch (err) {
    console.error('Failed to perform populate query');
    console.error(err);
  } finally {
    await client.end();
  }
}

populateDb();
