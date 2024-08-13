import asyncHandler from 'express-async-handler';
import * as q from '../db/queries/artistsQueries.js';

// /
export const readAllArtists = asyncHandler(async (_req, res) => {
  const artists = await q.selectAllArtists();
  res.send(artists);
});

export const viewAllArtists = asyncHandler(async (_req, res) => {
  const artists = await q.selectAllArtists();
  res.render('artists', { artists });
});

// /:id
export const readArtist = asyncHandler(async (req, res) => {
  const [artist, songs, genres] = await Promise.all([
    q.selectArtist(req.params.id),
    q.selectGenresOfArtist(req.params.id),
    q.selectSongsByArtist(req.params.id),
  ]);
  res.send({ ...artist, genres, songs });
});

export const viewArtist = asyncHandler(async (req, res) => {
  const [artist, songs, genres] = await Promise.all([
    q.selectArtist(req.params.id),
    q.selectSongsByArtist(req.params.id),
    q.selectGenresOfArtist(req.params.id),
  ]);
  res.render('artist', { artist, genres, songs });
});
