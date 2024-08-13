import asyncHandler from 'express-async-handler';
import * as q from '../db/queries/artistsQueries.js';

export const getArtists = asyncHandler(async (_req, res) => {
  const artists = await q.getAllArtists();
  res.send(artists);
});

export const viewArtists = asyncHandler(async (_req, res) => {
  const artists = await q.getAllArtists();
  res.render('artists', { artists });
});

export const getArtist = asyncHandler(async (req, res) => {
  const artist = await q.getArtist(req.params.id);
  const songs = await q.getSongsByArtist(req.params.id);
  const genres = await q.getGenresOfArtist(req.params.id);
  res.send({ ...artist, songs, genres });
});

export const viewArtist = asyncHandler(async (req, res) => {
  const artist = await q.getArtist(req.params.id);
  const songs = await q.getSongsByArtist(req.params.id);
  const genres = await q.getGenresOfArtist(req.params.id);
  res.render('artist', { artist, songs, genres });
});
