module.exports = (app) => {
  const dataset = require('../controllers/dataset')
  const organization = require('../controllers/organization')

  // Dataset views
  app.get('/dataset', dataset.init)

  // Organization views
  app.get('/organization', organization.init)
}