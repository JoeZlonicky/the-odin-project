import asyncHandler from 'express-async-handler';

const get = asyncHandler(async (req, res) => {
  await req.promiseLogOut();
  res.redirect('/');
});

export { get };
