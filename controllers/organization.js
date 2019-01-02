const organizations = require('../public/datas/organizations')

module.exports = {
  init(req, res) {
    res.render('organizations', {
      organizationItems: organizations,
      breadcrumbs: [{
        name: "Instituciones",
        link: "/organization"
      }]
    })
  }
}