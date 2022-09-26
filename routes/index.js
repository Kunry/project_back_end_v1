const validateToken = require('../middleware/validateToken.middleware');

module.exports = (app) => {
  app.use('/api/cocktail', require('./cocktail.routes'));
  app.use('/api/auth', require('./auth.routes'));
  app.use('/api/user', validateToken, require('./user.routes'));
}