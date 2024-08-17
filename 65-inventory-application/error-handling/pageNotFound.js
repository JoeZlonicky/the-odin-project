function pageNotFound(_req, res) {
  res.status(404).render('errors/pageNotFound');
}

export default pageNotFound;
