module.exports = (app) => {
  const dataset = require('../controllers/dataset')
  const organization = require('../controllers/organization')
  const group = require('../controllers/group')

  // Dataset views
  app.get('/dataset', dataset.init)

  // Organization views
  app.get('/organization', organization.init)

  // Group views
  app.get('/group', group.init)
}