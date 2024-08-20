import asyncHandler from 'express-async-handler';
import passport from 'passport';

function get(_req, res) {
  res.render('auth/log-in/logIn');
}

const post = asyncHandler(async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.render('auth/log-in/logIn', { error: info.message });
    }

    await req.promiseLogIn(user);
    res.redirect('/');
  })(req, res, next);
});

export const logIn = { post, get };
