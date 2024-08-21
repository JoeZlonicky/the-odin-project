// eslint-disable-next-line no-unused-vars
function handle(err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).render('_errors/server-error/serverError');
}

export const ServerErrorController = { handle };
