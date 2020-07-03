const {Router} = require('express')
const products = require('./src/routes/products')
const orders = require('./src/routes/orders')
const router = new Router()

router.use(orders)
router.use(products)

module.exports = router