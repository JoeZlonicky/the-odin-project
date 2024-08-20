function serializeUser(user, done) {
  done(null, user.id);
}

export { serializeUser };
