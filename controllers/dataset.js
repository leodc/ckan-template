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
  }
}