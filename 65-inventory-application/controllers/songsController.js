import asyncHandler from 'express-async-handler';
import * as artistsQ from '../db/queries/artistsQueries.js';
import * as genresQ from '../db/queries/genresQueries.js';
import * as q from '../db/queries/songsQueries.js';

// /
export const createSong = asyncHandler(async (req, res) => {
  const { name, lengthSeconds } = req.body;
  let { genreIds, artistIds } = req.body;
  if (!Array.isArray(genreIds)) {
    genreIds = [genreIds];
  }
  if (!Array.isArray(artistIds)) {
    artistIds = [artistIds];
  }

  const song = await q.insertSong(name, lengthSeconds, artistIds, genreIds);
  res.redirect(`/songs/${song.id}/view`);
});

export const readAllSongs = asyncHandler(async (_req, res) => {
  const songs = await q.selectAllSongs();
  res.send(songs);
});

export const viewAllSongs = asyncHandler(async (_req, res) => {
  const songs = await q.selectAllSongs();
  res.render('songs/allSongs', { songs });
});

export const viewCreateSong = asyncHandler(async (_req, res) => {
  const [genres, artists] = await Promise.all([genresQ.selectAllGenres(), artistsQ.selectAllArtists()]);
  res.render('songs/createSong', { genres, artists });
});

// /:id
export const readSong = asyncHandler(async (req, res) => {
  const [song, genres, artists] = await Promise.all([
    q.selectSong(req.params.id),
    q.selectSongGenres(req.params.id),
    q.selectSongArtists(req.params.id),
  ]);
  res.send({ ...song, genres, artists });
});

export const updateSong = asyncHandler(async (req, res) => {
  const { name, lengthSeconds } = req.body;
  let { genreIds, artistIds } = req.body;
  if (!Array.isArray(genreIds)) {
    genreIds = [genreIds];
  }
  if (!Array.isArray(artistIds)) {
    artistIds = [artistIds];
  }

  await q.updateSong(req.params.id, name, lengthSeconds, genreIds, artistIds);
  res.redirect(`/songs/${req.params.id}/view`);
});

export const deleteSong = asyncHandler(async (req, res) => {
  await q.deleteSong(req.params.id);
  res.redirect('/songs/view');
});

export const viewSong = asyncHandler(async (req, res) => {
  const [song, genres, artists] = await Promise.all([
    q.selectSong(req.params.id),
    q.selectSongGenres(req.params.id),
    q.selectSongArtists(req.params.id),
  ]);
  res.render('songs/song', { song, genres, artists });
});

export const viewUpdateSong = asyncHandler(async (req, res) => {
  const [song, genres, artists, songGenres, songArtists] = await Promise.all([
    q.selectSong(req.params.id),
    genresQ.selectAllGenres(),
    artistsQ.selectAllArtists(),
    q.selectSongGenres(req.params.id),
    q.selectSongArtists(req.params.id),
  ]);

  const songGenreIds = songGenres.map((genre) => genre.id);
  const songArtistIds = songArtists.map((artist) => artist.id);
  res.render('songs/updateSong', { song, genres, artists, songGenreIds, songArtistIds });
});
