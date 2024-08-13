import asyncHandler from 'express-async-handler';
import * as q from '../db/queries/genresQueries.js';

// /
export const createGenre = asyncHandler(async (req, res) => {
  const { name } = req.body;
  await q.insertGenre(name);
  res.redirect('/genres/view');
});

export const readAllGenres = asyncHandler(async (_req, res) => {
  const genres = await q.selectAllGenres();
  res.send(genres);
});

export const viewAllGenres = asyncHandler(async (_req, res) => {
  const genres = await q.selectAllGenres();
  res.render('genre/allGenres', { genres });
});

export const viewCreateGenre = asyncHandler(async (_req, res) => {
  res.render('genre/createGenre');
});

// /:id
export const readGenre = asyncHandler(async (req, res) => {
  const [genre, artists, songs] = await Promise.all([
    q.selectGenre(req.params.id),
    q.selectArtistsOfGenre(req.params.id),
    q.selectSongsOfGenre(req.params.id),
  ]);
  res.send({ ...genre, artists, songs });
});

export const updateGenre = asyncHandler(async (req, res) => {
  const { name } = req.body;
  await q.updateGenre(req.params.id, name);
  res.redirect('/genres/view');
});

export const deleteGenre = asyncHandler(async (req, res) => {
  await q.deleteGenre(req.params.id);
  res.redirect('/genres/view');
});

export const viewGenre = asyncHandler(async (req, res) => {
  const [genre, artists, songs] = await Promise.all([
    q.selectGenre(req.params.id),
    q.selectArtistsOfGenre(req.params.id),
    q.selectSongsOfGenre(req.params.id),
  ]);
  res.render('genre/genre', { genre, artists, songs });
});

export const viewUpdateGenre = asyncHandler(async (req, res) => {
  const genre = await q.selectGenre(req.params.id);
  res.render('genre/updateGenre', { genre });
});
