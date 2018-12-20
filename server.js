const express = require('express')
const app = express()
const router = require('./config/router')

let port = process.env.PORT || 4000

app.set('view engine', 'pug')
app.set('views', 'views')
app.use(express.static('public'))

// Router
router(app)

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`)
})