const express = require('express')
const app = express()
const port = process.env.PORT || 5555
const router = require('./src/routes')

app.use(router)

app.listen(port, err => {
    if(err) return console.log(`Não startou ${err}`)
    console.log('Running on port', port)
})