
module.exports = (app) => {
  app.use('/api/cocktail', require('./cocktail.routes'));
}