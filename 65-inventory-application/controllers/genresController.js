import asyncHandler from 'express-async-handler';
import * as genres from '../db/queries/genresQueries.js';

export const getGenres = asyncHandler(async (_req, res) => {
  const all = await genres.getAllGenres();
  res.send(all);
});

export const viewGenres = asyncHandler(async (_req, res) => {
  const all = await genres.getAllGenres();
  res.render('genres', { genres: all });
});
