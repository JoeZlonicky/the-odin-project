import asyncHandler from 'express-async-handler';

export const readIndex = asyncHandler(async (_req, res) => {
  res.redirect('/view');
});

export const viewIndex = asyncHandler(async (_req, res) => {
  res.render('index');
});
