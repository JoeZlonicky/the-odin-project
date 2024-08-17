// eslint-disable-next-line no-unused-vars
function serverError(err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).render('errors/serverError');
}

export default serverError;
