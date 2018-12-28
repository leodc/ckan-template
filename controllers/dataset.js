const datasetItems = require('../public/datas/dataset-items')

module.exports = {
  init(req, res) {
    res.render('dataset/dataset', {
      params: req.query,
      datasets: datasetItems,
      breadcrumbs: [{
        name: "Datos",
        link: "/dataset"
      }]
    })
  }
}