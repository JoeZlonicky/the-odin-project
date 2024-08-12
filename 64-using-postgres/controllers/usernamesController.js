import asyncHandler from 'express-async-handler';
import * as db from '../db/queries.js';

export const getUsernamesList = asyncHandler(async (req, res) => {
  const searchQuery = req.query.search;
  let usernames;
  if (searchQuery) {
    usernames = await db.getUsernamesWithSearch(searchQuery);
  } else {
    usernames = await db.getAllUsernames();
  }

  res.send(`Usernames: ${usernames.map((user) => user.username)}`);
});

export function getNewUsername(_req, res) {
  res.render('newUsername');
}

export const postNewUsername = asyncHandler(async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect('/new');
});

export const deleteUsernames = asyncHandler(async (_req, res) => {
  const deleted = await db.deleteUsernames();
  res.send(`Deleted ${deleted.length} usernames`);
});
