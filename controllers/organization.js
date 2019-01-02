module.exports = {
  init(req, res) {
    res.render('organizations', {
      organizationItems: require('../public/datas/organizations'),
      breadcrumbs: [{
        name: "Instituciones",
        link: "/organization"
      }]
    })
  },

  orgDataset(req, res) {
    res.render('organization', {
      source: require('../public/datas/one-org-dataset'),
      filters: require('../public/datas/sidebar-items'),
      datasets: require('../public/datas/dataset-items'),
      breadcrumbs: [{
        name: "Instituciones",
        link: "/organization"
      }, {
          name: "CONADIC",
          link: "/organization/conadic"
      }]
    })
  }
}