module.exports = {
  init(req, res) {
    res.render('group', {
      groupItems: require('../public/datas/groups-items'),
      breadcrumbs: [{
        name: "Grupos",
        link: "/groups"
      }]
    })
  }
}