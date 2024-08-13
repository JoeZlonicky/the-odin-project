import asyncHandler from 'express-async-handler';
import * as q from '../db/queries/artistsQueries.js';

// /
export const createArtist = asyncHandler(async (req, res) => {
  const { name } = req.body;
  await q.insertArtist(name);
  res.redirect('/artists/view');
});

export const readAllArtists = asyncHandler(async (_req, res) => {
  const artists = await q.selectAllArtists();
  res.send(artists);
});

export const viewAllArtists = asyncHandler(async (_req, res) => {
  const artists = await q.selectAllArtists();
  res.render('artists/allArtists', { artists });
});

export const viewCreateArtist = asyncHandler(async (_req, res) => {
  res.render('artists/createArtist');
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

export const updateArtist = asyncHandler(async (req, res) => {
  const { name } = req.body;
  await q.updateArtist(req.params.id, name);
  res.redirect(`/artists/${req.params.id}/view`);
});

export const deleteArtist = asyncHandler(async (req, res) => {
  await q.deleteArtist(req.params.id);
  res.redirect('/artists/view');
});

export const viewArtist = asyncHandler(async (req, res) => {
  const [artist, songs, genres] = await Promise.all([
    q.selectArtist(req.params.id),
    q.selectSongsByArtist(req.params.id),
    q.selectGenresOfArtist(req.params.id),
  ]);
  res.render('artists/artist', { artist, genres, songs });
});

export const viewUpdateArist = asyncHandler(async (req, res) => {
  const artist = await q.selectArtist(req.params.id);
  res.render('artists/updateArtist', { artist });
});
