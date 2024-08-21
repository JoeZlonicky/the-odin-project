import asyncHandler from 'express-async-handler';
import passport from 'passport';

function get(_req, res) {
  res.render('users/log-in/logIn');
}

const post = asyncHandler(async (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      const { username } = req.body;
      return res.status(401).render('users/log-in/logIn', { error: info.message, username });
    }

    await req.promiseLogIn(user);
    res.redirect('/');
  })(req, res, next);
});

export const LogInController = { post, get };
