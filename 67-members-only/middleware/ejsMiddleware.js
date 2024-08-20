import express from 'express';

const expressRender = express.response.render;

// For using .view.ejs file extension
function newRender(view, options, callback) {
  expressRender.call(this, view + '.view.ejs', options, callback);
}

function ejsMiddleware(req, res, next) {
  res.render = newRender;

  res.locals.siteName = 'The Forum';
  res.locals.user = req.user;
  next();
}

export { ejsMiddleware };
