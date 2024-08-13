import asyncHandler from 'express-async-handler';
import * as q from '../db/queries/songsQueries.js';

// /
export const readAllSongs = asyncHandler(async (_req, res) => {
  const songs = await q.selectAllSongs();
  res.send(songs);
});

export const viewAllSongs = asyncHandler(async (_req, res) => {
  const songs = await q.selectAllSongs();
  res.render('songs', { songs });
});

// /:id
export const readSong = asyncHandler(async (req, res) => {
  const [song, artists] = await Promise.all([q.selectSong(req.params.id), q.selectSongArtists(req.params.id)]);
  res.send({ ...song, artists });
});

export const viewSong = asyncHandler(async (req, res) => {
  const [song, artists] = await Promise.all([q.selectSong(req.params.id), q.selectSongArtists(req.params.id)]);
  res.render('song', { song, artists });
});
