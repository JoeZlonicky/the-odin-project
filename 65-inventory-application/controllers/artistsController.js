import asyncHandler from 'express-async-handler';
import * as artists from '../db/queries/artistsQueries.js';

export const getArtists = asyncHandler(async (_req, res) => {
  const all = await artists.getAllArtists();
  res.send(all);
});

export const viewArtists = asyncHandler(async (_req, res) => {
  const all = await artists.getAllArtists();
  res.render('artists', { artists: all });
});
