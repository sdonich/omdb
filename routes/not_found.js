function notFound(res) {
  res.render('error.html', { error: 'Not found' });
}

module.exports = notFound;