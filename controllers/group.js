const groups = require('../public/datas/groups-items')

module.exports = {
  init(req, res) {
    res.render('group', {
      groupItems: groups,
      breadcrumbs: [{
        name: "Grupos",
        link: "/groups"
      }]
    })
  }
}