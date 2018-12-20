const datasetItems = require('../public/datas/dataset-items')

module.exports = {
  init(req, res) {
    res.render('home', {
      datasets: datasetItems
    })
  }
}