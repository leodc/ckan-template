module.exports = (app) => {
  const home = require('../controllers/home')

  // Home views
  app.get('/', home.init)
}