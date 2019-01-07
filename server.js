const express = require('express')
const app = express()
const router = require('./config/router')

let port = process.env.PORT || 4000

process.env.CKAN_PACKAGE_SEARCH="https://datos.gob.mx/ckan-admin/api/3/action/package_search"

app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.static('public'))

// Router
router(app)

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`)
})
