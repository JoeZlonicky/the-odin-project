import asyncHandler from 'express-async-handler';
import * as q from '../db/queries/songsQueries.js';

export const getSongs = asyncHandler(async (_req, res) => {
  const songs = await q.getAllSongs();
  res.send(songs);
});

export const viewSongs = asyncHandler(async (_req, res) => {
  const songs = await q.getAllSongs();
  res.render('songs', { songs });
});

export const getSong = asyncHandler(async (req, res) => {
  const song = await q.getSong(req.params.id);
  const artists = await q.getSongArtists(req.params.id);
  res.send({ ...song, artists });
});

export const viewSong = asyncHandler(async (req, res) => {
  const song = await q.getSong(req.params.id);
  const artists = await q.getSongArtists(req.params.id);
  res.render('song', { song, artists });
});
