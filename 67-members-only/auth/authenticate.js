import passport from 'passport';

const authenticate = passport.authenticate('local', { successRedirect: '/', failureRedirect: '/auth/log-in/view' });

export { authenticate };
