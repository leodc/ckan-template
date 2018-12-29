const datasetItems = require('../public/datas/dataset-items')
const sidebarItems = require('../public/datas/sidebar-items')

module.exports = {
  init(req, res) {
    res.render('dataset', {
      params: req.query,
      filters: sidebarItems,
      datasets: datasetItems,
      breadcrumbs: [{
        name: "Datos",
        link: "/dataset"
      }]
    })
  },

  resource(req, res) {
    res.render('resource', {
      source: require('../public/datas/one-resource'),
      breadcrumbs: [{
        name: "Instituciones",
        link: "/organization"
      }, {
        name: "CONADIC",
        link: "/organization/conadic"
      }, {
        name: "Convenios firmados en los estados.",
        link: ""
      }]
    })
  }
}