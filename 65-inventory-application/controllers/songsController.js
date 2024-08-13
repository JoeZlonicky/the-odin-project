import asyncHandler from 'express-async-handler';
import * as songs from '../db/queries/songsQueries.js';

export const getSongs = asyncHandler(async (_req, res) => {
  const all = await songs.getAllSongs();
  res.send(all);
});

export const viewSongs = asyncHandler(async (_req, res) => {
  const all = await songs.getAllSongs();
  res.render('songs', { songs: all });
});
