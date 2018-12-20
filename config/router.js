module.exports = (app) => {
  const dataset = require('../controllers/dataset')

  // Dataset views
  app.get('/dataset', dataset.init)
}