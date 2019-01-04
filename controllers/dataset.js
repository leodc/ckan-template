module.exports = {
  init(req, res) {
    res.render('dataset', {
      params: req.query,
      filters: require('../public/datas/sidebar-items'),
      datasets: require('../public/datas/dataset-items'),
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