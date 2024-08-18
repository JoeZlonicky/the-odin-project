import passport from 'passport';

const protectedRoute = passport.authenticate('local', { successRedirect: '/', failureRedirect: '/' });

export { protectedRoute };
