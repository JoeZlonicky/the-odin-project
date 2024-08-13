import asyncHandler from 'express-async-handler';

export const getIndex = asyncHandler(async (_req, res) => {
  res.redirect('/view');
});

export const getIndexView = asyncHandler(async (_req, res) => {
  res.render('index');
});
