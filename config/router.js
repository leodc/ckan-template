module.exports = (app) => {
  const dataset = require('../controllers/dataset')
  const organization = require('../controllers/organization')
  const group = require('../controllers/group')

  // Dataset views
  app.get('/dataset', dataset.init)
  app.get('/dataset/:resource', dataset.resource)

  // Organization views
  app.get('/organization', organization.init)
  app.get('/organization/:org', organization.orgDataset)

  // Group views
  app.get('/group', group.init)
}