const express = require('express')
const productsRoute = require('./src/routes/products')
const app = express()
const port = process.env.PORT || 5555

app.use(productsRoute) 

app.listen(port, err => {
    if(err) return console.log(`Não startou ${err}`)
    console.log('Running on port', port)
})