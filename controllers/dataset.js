const https = require("https");

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
    var resourceName = req.params.resource;
    var url = process.env.CKAN_PACKAGE_SEARCH + "?q=" + resourceName;

    https.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        // A chunk of data has been recieved.
        data += chunk;
      });

      resp.on('end', () => {
        data = JSON.parse(data);
        // The whole response has been received. Print out the result.
        if(data.result.count > 0){
          var resource;
          var organizationName;
          var organizationTitle;
          var resourceTitle;
          for(var result of data.result.results){
            if(result.name == resourceName){
              resource = result;

              resourceTitle = result.title;
              organizationTitle = result.organization.title;
              organizationName = result.organization.name;
              break;
            }
          }

          resource.socials = [
            {
              "name": "Google+",
              "url": "https://plus.google.com/share?url=https://datos.gob.mx/busca/dataset/" + resourceName
            },
            {
              "name": "Twitter",
              "url": "https://twitter.com/share?url=https://datos.gob.mx/busca/dataset/" + resourceName
            },
            {
              "name": "Facebook",
              "url": "https://www.facebook.com/sharer.php?u=https://datos.gob.mx/busca/dataset/" + resourceName
            }
          ];

          resource.metadatas= {
            "mail": "judith.ortega@salud.gob.mx",
            "frequency": "irregular",
            "guid": "convenios-firmados-en-los-estados",
            "language": "es",
            "modified": "2018-03-31T00:00:00Z",
            "publisher_name": "CONADIC",
            "publisher_type": "Subdirectora",
            "published": "2017-10-20T16:19:19Z",
            "topic": "Salud",
            "url": "http://www.conadic.salud.gob.mx/prueba/convenios.csv"
          }

          res.render('resource', {
            source: resource,
            breadcrumbs: [{
              name: "Instituciones",
              link: "/organization"
            }, {
              name: organizationName,
              link: "/organization/" + organizationTitle
            }, {
              name: resourceTitle,
              link: ""
            }]
          });

        }else{
          // package not found
        }

      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });

  }
}
