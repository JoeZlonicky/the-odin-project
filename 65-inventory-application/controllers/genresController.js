import asyncHandler from 'express-async-handler';
import * as q from '../db/queries/genresQueries.js';

export const getGenres = asyncHandler(async (_req, res) => {
  const genres = await q.getAllGenres();
  res.send(genres);
});

export const viewGenres = asyncHandler(async (_req, res) => {
  const genres = await q.getAllGenres();
  res.render('genres', { genres });
});

export const getGenre = asyncHandler(async (req, res) => {
  const genre = await q.getGenre(req.params.id);
  const artists = await q.getArtistsOfGenre(req.params.id);
  const songs = await q.getSongsOfGenre(req.params.id);
  res.send({ ...genre, artists, songs });
});

export const viewGenre = asyncHandler(async (req, res) => {
  const genre = await q.getGenre(req.params.id);
  const artists = await q.getArtistsOfGenre(req.params.id);
  const songs = await q.getSongsOfGenre(req.params.id);
  res.render('genre', { genre, artists, songs });
});
